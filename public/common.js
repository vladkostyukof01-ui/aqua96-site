// Общий JS для всех публичных страниц: навигация, футер, вспомогательные утилиты.
// Композиционная метафора сайта — "профиль глубины": разделы читаются как
// поперечный разрез бассейна сверху вниз (мелкая часть → средняя → глубокая
// часть → дно), в духе технического чертежа профиля чаши. Навигация оформлена
// как метка отметки глубины ("0.00"), футер — как отметка дна ("дно / низ").

function esc(str) {
  return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
}
function escAttr(str) {
  return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
function telHref(phone) {
  return 'tel:' + String(phone || '').replace(/[^\d+]/g, '');
}
function truncate(str, max) {
  const s = String(str || '');
  return s.length > max ? s.slice(0, max).replace(/\s+\S*$/, '') + '…' : s;
}

const NAV_LINKS = [
  { href: '/', label: 'Главная' },
  { href: '/o-kompanii', label: 'О компании' },
  { href: '/basseyny', label: 'Бассейны' },
  { href: '/sauny', label: 'Сауны' },
  { href: '/turetskie-bani', label: 'Турецкие бани' },
  { href: '/fotogalereya', label: 'Фотогалерея' },
  { href: '/kontakty', label: 'Контакты' },
];

function renderNav(settings) {
  const brand = settings.brand_name || 'Аква 96';
  const path = window.location.pathname;
  const html = `
    <header class="depth-nav">
      <div class="wrap depth-nav-inner">
        <a href="/" class="depth-mark" aria-label="${esc(brand)} — на главную">
          <img class="depth-mark-logo" src="/img/logo.png" alt="${esc(brand)}" width="188" height="92">
        </a>
        <nav class="depth-links">
          ${NAV_LINKS.map(l => `<a href="${l.href}" class="${path === l.href ? 'is-current' : ''}">${l.label}</a>`).join('')}
        </nav>
        <a class="depth-phone" href="${telHref(settings.phone)}">${esc(settings.phone || '')}</a>
        <button type="button" class="depth-burger" id="navBurger" aria-label="Открыть меню" aria-expanded="false" aria-controls="navMobilePanel">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="depth-nav-mobile" id="navMobilePanel" hidden>
        <div class="wrap">
          ${NAV_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
          <a class="depth-mobile-phone" href="${telHref(settings.phone)}">${esc(settings.phone || '')}</a>
        </div>
      </div>
    </header>
  `;
  const placeholder = document.getElementById('navPlaceholder');
  if (placeholder) placeholder.outerHTML = html;

  const burger = document.getElementById('navBurger');
  const panel = document.getElementById('navMobilePanel');
  if (burger && panel) {
    burger.addEventListener('click', () => {
      const isOpen = !panel.hidden;
      panel.hidden = isOpen;
      burger.setAttribute('aria-expanded', String(!isOpen));
      burger.classList.toggle('is-open', !isOpen);
    });
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      panel.hidden = true;
      burger.setAttribute('aria-expanded', 'false');
      burger.classList.remove('is-open');
    }));
  }
}

function renderFooter(settings) {
  const html = `
    <footer class="depth-floor">
      <div class="wrap depth-floor-inner">
        <div class="depth-floor-mark">— дно —</div>
        <div class="depth-floor-grid">
          <div class="depth-floor-col">
            <b>${esc(settings.brand_name || '')}</b>
            <span>${esc(settings.legal_address || '')}</span>
          </div>
          <div class="depth-floor-col">
            <a href="${telHref(settings.phone)}">${esc(settings.phone || '')}</a>
            <a href="${telHref(settings.phone_alt)}">${esc(settings.phone_alt || '')}</a>
            <a href="mailto:${escAttr(settings.email)}">${esc(settings.email || '')}</a>
          </div>
          <nav class="depth-floor-col depth-floor-links">
            <a href="/basseyny">Бассейны</a>
            <a href="/sauny">Сауны</a>
            <a href="/turetskie-bani">Турецкие бани</a>
            <a href="/fotogalereya">Фотогалерея</a>
            <a href="/privacy">Обработка данных</a>
          </nav>
        </div>
        <p class="depth-floor-copy">© 2008–2026 ${esc(settings.brand_name || '')}. Поставка оборудования и строительство бассейнов, саун, турецких бань в Екатеринбурге.</p>
      </div>
    </footer>
  `;
  const placeholder = document.getElementById('footerPlaceholder');
  if (placeholder) placeholder.outerHTML = html;
}

let cachedSettings = null;
async function loadSettingsGlobal() {
  if (cachedSettings) return cachedSettings;
  const res = await fetch('/api/settings');
  cachedSettings = await res.json();
  return cachedSettings;
}

async function initLayout() {
  try {
    const settings = await loadSettingsGlobal();
    renderNav(settings);
    renderFooter(settings);
  } catch (err) {
    console.error('Не удалось загрузить настройки сайта:', err);
  }
}
initLayout();

// ============ ОБЩИЕ РЕНДЕРЫ КОНТЕНТА ============

function renderCategoryStrata(categories) {
  // Три направления как три "слоя глубины" — не карточки в ряд, а
  // горизонтальные полосы, каждая на всю ширину, с номером глубины слева
  // (0–1.2 м / 1.2–2.0 м / условная отметка для парной) и фотографией справа.
  const depthLabels = { 'basseyny': '0,0 — 2,0 м', 'sauny': '+70…+110 °C', 'turetskie-bani': '+40…+45 °C, влажность 100%' };
  return categories.map((c, i) => `
    <a class="stratum" href="/${esc(c.slug)}">
      <div class="stratum-index">
        <span class="stratum-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="stratum-depth">${esc(depthLabels[c.slug] || '')}</span>
      </div>
      <div class="stratum-body">
        <h3>${esc(c.title)}</h3>
        <p>${esc(truncate((c.intro || '').split('\n')[0], 170))}</p>
        <span class="stratum-go">Подробнее о разделе →</span>
      </div>
      <div class="stratum-image" style="background-image:url('${escAttr(c.hero_image)}')"></div>
    </a>
  `).join('');
}

function renderProductGroups(groups) {
  return `<div class="group-table">${groups.map(g => `
    <div class="group-row">
      <span class="group-title">${esc(g.title)}</span>
      <span class="group-count">${g.item_count != null ? esc(g.item_count) + ' ' + pluralizeTovar(g.item_count) : ''}</span>
    </div>
  `).join('')}</div>`;
}

function pluralizeTovar(n) {
  const n10 = n % 10, n100 = n % 100;
  if (n100 >= 11 && n100 <= 14) return 'товаров';
  if (n10 === 1) return 'товар';
  if (n10 >= 2 && n10 <= 4) return 'товара';
  return 'товаров';
}

function renderBrandStrip(brands) {
  return brands.map(b => `<span class="brand-chip">${esc(b.name)}</span>`).join('');
}

function renderReferenceTable(projects) {
  return `<div class="ref-table">${projects.map((p, i) => `
    <div class="ref-row">
      <span class="ref-num">${String(i + 1).padStart(3, '0')}</span>
      <span class="ref-client">${esc(p.client_name)}</span>
      <span class="ref-city">${esc(p.city)}</span>
      <span class="ref-scope">${esc(p.scope)}</span>
    </div>
  `).join('')}</div>`;
}
