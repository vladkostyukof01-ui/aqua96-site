require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const rateLimit = require('express-rate-limit');
const db = require('./db');
const { verifyAdmin, changePassword, requireAuth, issueCsrfToken, requireCsrf } = require('./auth');
const { aggregateStats } = require('./seed_content');

const app = express();
const PORT = process.env.PORT || 3502;
const SESSION_SECRET = process.env.SESSION_SECRET || 'change-this-secret-before-deploy';

app.set('trust proxy', 1);

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
      imgSrc: ["'self'", 'data:'],
      connectSrc: ["'self'"],
      frameSrc: ["https://yandex.ru"],
    },
  },
}));

app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 8,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  },
}));

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Слишком много попыток входа. Попробуйте снова через 15 минут.' },
});

app.use('/api/admin', (req, res, next) => {
  const isSafeMethod = req.method === 'GET' || req.method === 'HEAD' || req.method === 'OPTIONS';
  const isLoginRoute = req.path === '/login';
  if (isSafeMethod || isLoginRoute) return next();
  return requireCsrf(req, res, next);
});

// ===================== ПУБЛИЧНОЕ API =====================

app.get('/api/settings', (req, res) => {
  const rows = db.prepare('SELECT key, value FROM settings').all();
  res.json(Object.fromEntries(rows.map(r => [r.key, r.value])));
});

app.get('/api/service-categories', (req, res) => {
  res.json(db.prepare('SELECT id, slug, title, hero_image, intro FROM service_categories ORDER BY sort_order').all());
});

app.get('/api/service-categories/:slug', (req, res) => {
  const category = db.prepare('SELECT * FROM service_categories WHERE slug = ?').get(req.params.slug);
  if (!category) return res.status(404).json({ error: 'Раздел не найден.' });
  const groups = db.prepare('SELECT id, title, item_count FROM product_groups WHERE category_id = ? ORDER BY sort_order').all(category.id);
  const brands = db.prepare(`
    SELECT b.id, b.name FROM brands b
    JOIN category_brands cb ON cb.brand_id = b.id
    WHERE cb.category_id = ?
    ORDER BY b.sort_order
  `).all(category.id);
  res.json({ ...category, groups, brands });
});

app.get('/api/service-categories/:slug/products', (req, res) => {
  const category = db.prepare('SELECT id FROM service_categories WHERE slug = ?').get(req.params.slug);
  if (!category) return res.status(404).json({ error: 'Раздел не найден.' });
  const rows = db.prepare(`
    SELECT id, group_title, title, brand, description, specs, price, variants, image
    FROM products WHERE category_id = ? ORDER BY sort_order
  `).all(category.id);
  res.json(rows);
});

app.get('/api/products/:id', (req, res) => {
  const product = db.prepare(`
    SELECT p.id, p.group_title, p.title, p.brand, p.description, p.specs, p.price, p.variants, p.image,
           sc.slug AS category_slug, sc.title AS category_title
    FROM products p JOIN service_categories sc ON sc.id = p.category_id
    WHERE p.id = ?
  `).get(req.params.id);
  if (!product) return res.status(404).json({ error: 'Товар не найден.' });
  res.json(product);
});

app.get('/api/reference-projects', (req, res) => {
  res.json(db.prepare('SELECT id, client_name, city, scope FROM reference_projects ORDER BY sort_order').all());
});

app.get('/api/aggregate-stats', (req, res) => {
  res.json(aggregateStats);
});

const GALLERY_CATEGORIES = {
  'basseyny': 'Бассейны',
  'sauny': 'Сауны',
  'turetskie-bani': 'Турецкие бани',
};
app.get('/api/gallery', (req, res) => {
  const galleryRoot = path.join(__dirname, '..', 'public', 'img', 'gallery');
  const result = Object.entries(GALLERY_CATEGORIES).map(([slug, label]) => {
    let files = [];
    try {
      files = fs.readdirSync(path.join(galleryRoot, slug))
        .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    } catch (err) {
      files = [];
    }
    return { slug, label, images: files.map(f => `/img/gallery/${slug}/${f}`) };
  });
  res.json(result);
});

app.get('/api/service-regions', (req, res) => {
  res.json(db.prepare('SELECT id, name FROM service_regions ORDER BY sort_order').all());
});

app.post('/api/leads', (req, res) => {
  const { name, phone, direction, message, consent, source } = req.body || {};
  if (!phone || !String(phone).trim()) {
    return res.status(400).json({ error: 'Укажите телефон.' });
  }
  if (!consent) {
    return res.status(400).json({ error: 'Нужно согласие на обработку персональных данных.' });
  }
  db.prepare(`
    INSERT INTO leads (name, phone, direction, message, source, consent_given) VALUES (?, ?, ?, ?, ?, 1)
  `).run(name || null, String(phone).trim(), direction || null, message || null, source || 'contact-form');
  res.json({ ok: true });
});

// ===================== АДМИН: АВТОРИЗАЦИЯ =====================

app.post('/api/admin/login', loginLimiter, (req, res) => {
  const { username, password } = req.body || {};
  if (!verifyAdmin(username, password)) {
    return res.status(401).json({ error: 'Неверный логин или пароль.' });
  }
  req.session.regenerate((err) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка сервера. Попробуйте войти снова.' });
    }
    req.session.adminUsername = username;
    const csrfToken = issueCsrfToken(req);
    res.json({ ok: true, username, csrfToken });
  });
});

app.post('/api/admin/logout', (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.get('/api/admin/me', (req, res) => {
  if (req.session && req.session.adminUsername) {
    const csrfToken = req.session.csrfToken || issueCsrfToken(req);
    return res.json({ username: req.session.adminUsername, csrfToken });
  }
  res.status(401).json({ error: 'Не авторизован.' });
});

app.post('/api/admin/change-password', requireAuth, (req, res) => {
  const { newPassword } = req.body || {};
  if (!newPassword || newPassword.length < 10) {
    return res.status(400).json({ error: 'Пароль должен быть не короче 10 символов.' });
  }
  changePassword(req.session.adminUsername, newPassword);
  res.json({ ok: true });
});

// ===================== АДМИН: НАСТРОЙКИ =====================

app.put('/api/admin/settings', requireAuth, (req, res) => {
  const updates = req.body || {};
  const upsert = db.prepare(`INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value`);
  const tx = db.transaction(() => { Object.entries(updates).forEach(([k, v]) => upsert.run(k, String(v))); });
  tx();
  res.json({ ok: true });
});

// ===================== АДМИН: РАЗДЕЛЫ И ПОДРАЗДЕЛЫ =====================

app.put('/api/admin/service-categories/:id', requireAuth, (req, res) => {
  const { title, intro } = req.body || {};
  const fields = [];
  const values = [];
  if (title !== undefined) { fields.push('title = ?'); values.push(title); }
  if (intro !== undefined) { fields.push('intro = ?'); values.push(intro); }
  if (!fields.length) return res.status(400).json({ error: 'Нечего обновлять.' });
  values.push(req.params.id);
  db.prepare(`UPDATE service_categories SET ${fields.join(', ')} WHERE id = ?`).run(...values);
  res.json({ ok: true });
});

app.put('/api/admin/product-groups/:id', requireAuth, (req, res) => {
  const { title, item_count } = req.body || {};
  const fields = [];
  const values = [];
  if (title !== undefined) { fields.push('title = ?'); values.push(title); }
  if (item_count !== undefined) { fields.push('item_count = ?'); values.push(item_count); }
  if (!fields.length) return res.status(400).json({ error: 'Нечего обновлять.' });
  values.push(req.params.id);
  db.prepare(`UPDATE product_groups SET ${fields.join(', ')} WHERE id = ?`).run(...values);
  res.json({ ok: true });
});

// ===================== АДМИН: ЗАЯВКИ =====================

app.get('/api/admin/leads', requireAuth, (req, res) => {
  res.json(db.prepare('SELECT * FROM leads ORDER BY created_at DESC').all());
});

app.put('/api/admin/leads/:id', requireAuth, (req, res) => {
  const { status } = req.body || {};
  if (!status) return res.status(400).json({ error: 'status обязателен.' });
  db.prepare('UPDATE leads SET status = ? WHERE id = ?').run(status, req.params.id);
  res.json({ ok: true });
});

app.delete('/api/admin/leads/:id', requireAuth, (req, res) => {
  db.prepare('DELETE FROM leads WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ===================== СТАТИКА И СТРАНИЦЫ =====================

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/admin', express.static(path.join(__dirname, '..', 'admin')));

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const CATEGORY_SLUGS = ['basseyny', 'sauny', 'turetskie-bani'];
CATEGORY_SLUGS.forEach(slug => {
  app.get('/' + slug, (req, res) => {
    const category = db.prepare('SELECT title, intro FROM service_categories WHERE slug = ?').get(slug);
    if (!category) {
      return res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
    }
    const template = fs.readFileSync(path.join(__dirname, '..', 'public', 'category.html'), 'utf8');
    const title = escapeHtml(category.title + ' — оборудование и строительство | Аква 96, Екатеринбург');
    const description = escapeHtml((category.intro || 'Оборудование и строительство в Екатеринбурге.')).slice(0, 160);
    const canonical = `https://ЗАМЕНИТЕ-НА-ДОМЕН.ru/${slug}`;
    const html = template
      .replace('<title id="pageTitle">Раздел — Аква 96</title>', `<title id="pageTitle">${title}</title>`)
      .replace(
        '<meta name="description" id="pageDescription" content="Оборудование и строительство бассейнов, саун и турецких бань.">',
        `<meta name="description" id="pageDescription" content="${description}">\n<link rel="canonical" href="${canonical}">\n<meta property="og:title" content="${title}">\n<meta property="og:description" content="${description}">\n<meta property="og:type" content="website">`
      );
    res.send(html);
  });
});

app.get('/product/:id', (req, res) => {
  const product = db.prepare(`
    SELECT p.title, p.description, sc.slug AS category_slug
    FROM products p JOIN service_categories sc ON sc.id = p.category_id
    WHERE p.id = ?
  `).get(req.params.id);
  if (!product) {
    return res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
  }
  const template = fs.readFileSync(path.join(__dirname, '..', 'public', 'product.html'), 'utf8');
  const title = escapeHtml(product.title + ' — Аква 96, Екатеринбург');
  const description = escapeHtml((product.description || 'Оборудование для бассейнов, саун и турецких бань.')).slice(0, 160);
  const html = template
    .replace('<title id="pageTitle">Товар — Аква 96</title>', `<title id="pageTitle">${title}</title>`)
    .replace(
      '<meta name="description" id="pageDescription" content="Оборудование для бассейнов, саун и турецких бань.">',
      `<meta name="description" id="pageDescription" content="${description}">`
    );
  res.send(html);
});

app.get('/o-kompanii', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'o-kompanii.html'));
});

app.get('/fotogalereya', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'fotogalereya.html'));
});

app.get('/kontakty', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'kontakty.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'privacy.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'admin', 'index.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Аква 96 запущена: http://localhost:${PORT}`);
  console.log(`Админ-панель: http://localhost:${PORT}/admin`);
});
