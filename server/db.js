const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'aqua96.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );

  -- Три направления с оригинала: Бассейны, Сауны, Турецкие бани. Каждое —
  -- отдельная страница-раздел (/basseyny, /sauny, /turetskie-bani), но одна
  -- таблица и один шаблон вместо трёх скопированных html-файлов.
  CREATE TABLE IF NOT EXISTS service_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    hero_image TEXT NOT NULL DEFAULT '',
    intro TEXT NOT NULL DEFAULT '',
    sort_order INTEGER NOT NULL DEFAULT 0
  );

  -- Товарные подразделы внутри направления (например, у "Бассейны" на
  -- оригинале было 14 подразделов: фильтры, насосы, закладные и т.д.,
  -- каждый с числом позиций в каталоге). Реальные названия и количества —
  -- с архивной страницы basseyny_2026.html, sauny_2024.html, turbani_2024.html.
  CREATE TABLE IF NOT EXISTS product_groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL REFERENCES service_categories(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    item_count INTEGER,
    sort_order INTEGER NOT NULL DEFAULT 0
  );

  -- Бренды оборудования — общий пул марок, привязанных к одному или
  -- нескольким направлениям (Astral/Kripsol относятся к бассейнам,
  -- TYLO/HARVIA/HELO — к саунам и турецким баням и т.д.).
  CREATE TABLE IF NOT EXISTS brands (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS category_brands (
    category_id INTEGER NOT NULL REFERENCES service_categories(id) ON DELETE CASCADE,
    brand_id INTEGER NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
    PRIMARY KEY (category_id, brand_id)
  );

  -- Реальные объекты-референсы с архивной страницы "О компании"
  -- (okompanii_2021.html) — фитнес-центры, бассейны, детские сады и т.д.
  -- с указанием, что именно было построено. Ничего не выдумано.
  CREATE TABLE IF NOT EXISTS reference_projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name TEXT NOT NULL,
    city TEXT NOT NULL DEFAULT '',
    scope TEXT NOT NULL DEFAULT '',
    sort_order INTEGER NOT NULL DEFAULT 0
  );

  -- Территория обслуживания — список регионов с оригинала.
  CREATE TABLE IF NOT EXISTS service_regions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0
  );

  -- Заявки с формы обратной связи.
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT,
    direction TEXT,
    message TEXT,
    source TEXT NOT NULL DEFAULT 'contact-form',
    consent_given INTEGER NOT NULL DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now')),
    status TEXT NOT NULL DEFAULT 'new'
  );
`);

module.exports = db;
