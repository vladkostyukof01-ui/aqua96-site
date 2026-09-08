const bcrypt = require('bcryptjs');
const db = require('./db');
const { settings } = require('./seed_settings');
const { categories, referenceProjects, aggregateStats, serviceRegions } = require('./seed_content');
const { products } = require('./seed_products');

function seedSettings() {
  const upsert = db.prepare(`INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO NOTHING`);
  const tx = db.transaction(() => {
    Object.entries(settings).forEach(([k, v]) => upsert.run(k, String(v)));
  });
  tx();
  console.log('Настройки сайта инициализированы.');
}

function seedCategories() {
  const count = db.prepare('SELECT COUNT(*) AS c FROM service_categories').get().c;
  if (count > 0) {
    console.log('Разделы услуг уже загружены, пропускаю.');
    return;
  }
  const insertCat = db.prepare(`
    INSERT INTO service_categories (slug, title, hero_image, intro, sort_order)
    VALUES (@slug, @title, @hero_image, @intro, @sort_order)
  `);
  const insertGroup = db.prepare(`
    INSERT INTO product_groups (category_id, title, item_count, sort_order)
    VALUES (@category_id, @title, @item_count, @sort_order)
  `);
  const findBrand = db.prepare('SELECT id FROM brands WHERE name = ?');
  const insertBrand = db.prepare('INSERT INTO brands (name, sort_order) VALUES (?, ?)');
  const linkBrand = db.prepare('INSERT OR IGNORE INTO category_brands (category_id, brand_id) VALUES (?, ?)');

  let brandOrder = 0;
  const tx = db.transaction(() => {
    categories.forEach(cat => {
      const result = insertCat.run({
        slug: cat.slug,
        title: cat.title,
        hero_image: cat.hero_image,
        intro: cat.intro,
        sort_order: cat.sort_order,
      });
      const categoryId = result.lastInsertRowid;

      cat.groups.forEach((g, i) => {
        insertGroup.run({ category_id: categoryId, title: g.title, item_count: g.item_count, sort_order: i });
      });

      cat.brands.forEach(brandName => {
        let row = findBrand.get(brandName);
        let brandId;
        if (row) {
          brandId = row.id;
        } else {
          brandOrder += 1;
          const r = insertBrand.run(brandName, brandOrder);
          brandId = r.lastInsertRowid;
        }
        linkBrand.run(categoryId, brandId);
      });
    });
  });
  tx();
  const totalGroups = categories.reduce((sum, c) => sum + c.groups.length, 0);
  console.log(`Загружено разделов: ${categories.length}, товарных подразделов: ${totalGroups}.`);
}

function seedReferenceProjects() {
  const count = db.prepare('SELECT COUNT(*) AS c FROM reference_projects').get().c;
  if (count > 0) {
    console.log('Референсные объекты уже загружены, пропускаю.');
    return;
  }
  const insert = db.prepare(`
    INSERT INTO reference_projects (client_name, city, scope, sort_order) VALUES (@client_name, @city, @scope, @sort_order)
  `);
  const tx = db.transaction(() => {
    referenceProjects.forEach((p, i) => insert.run({ ...p, sort_order: i }));
  });
  tx();
  console.log(`Загружено референсных объектов: ${referenceProjects.length}.`);
}

function seedRegions() {
  const count = db.prepare('SELECT COUNT(*) AS c FROM service_regions').get().c;
  if (count > 0) {
    console.log('Регионы уже загружены, пропускаю.');
    return;
  }
  const insert = db.prepare('INSERT INTO service_regions (name, sort_order) VALUES (?, ?)');
  const tx = db.transaction(() => {
    serviceRegions.forEach((name, i) => insert.run(name, i));
  });
  tx();
  console.log(`Загружено регионов обслуживания: ${serviceRegions.length}.`);
}

function seedProducts() {
  const count = db.prepare('SELECT COUNT(*) AS c FROM products').get().c;
  if (count > 0) {
    console.log('Товарные карточки уже загружены, пропускаю.');
    return;
  }
  const findCategory = db.prepare('SELECT id FROM service_categories WHERE slug = ?');
  const insert = db.prepare(`
    INSERT INTO products (category_id, group_title, title, brand, description, specs, price, variants, image, sort_order)
    VALUES (@category_id, @group_title, @title, @brand, @description, @specs, @price, @variants, @image, @sort_order)
  `);
  let skipped = 0;
  const tx = db.transaction(() => {
    products.forEach((p, i) => {
      const category = findCategory.get(p.category_slug);
      if (!category) { skipped += 1; return; }
      insert.run({
        category_id: category.id,
        group_title: p.group_title || '',
        title: p.title,
        brand: p.brand || '',
        description: p.description || '',
        specs: p.specs || '',
        price: p.price || '',
        variants: p.variants || '',
        image: p.image || '',
        sort_order: i,
      });
    });
  });
  tx();
  console.log(`Загружено товарных карточек: ${products.length - skipped}${skipped ? `, пропущено (раздел не найден): ${skipped}` : ''}.`);
}

function seedAdmin() {
  const count = db.prepare('SELECT COUNT(*) AS c FROM admins').get().c;
  if (count > 0) {
    console.log('Админ уже существует, пропускаю.');
    return;
  }
  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'aqua96-2026';
  const hash = bcrypt.hashSync(password, 12);
  db.prepare('INSERT INTO admins (username, password_hash) VALUES (?, ?)').run(username, hash);
  console.log(`Создан админ: логин "${username}", пароль "${password}" (смените после первого входа!).`);
}

seedSettings();
seedCategories();
seedReferenceProjects();
seedRegions();
seedProducts();
seedAdmin();
console.log('Готово. Сводные показатели (250+/300+/100+ частных объектов) выводятся из server/seed_content.js#aggregateStats на главной без отдельной таблицы.');
