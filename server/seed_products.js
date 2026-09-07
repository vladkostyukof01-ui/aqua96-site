// Реальные товарные карточки, собранные дословно с архивных страниц товаров
// aqua96.ru/uploads/product/<id>/... (изначально с Wayback Machine, где сами
// фото карточек не сохранились). Текстовые данные (цены, характеристики,
// описания) настоящие и добавлены как есть.
//
// ОБНОВЛЕНО: когда живой сайт aqua96.ru снова стал доступен, все 31 позиция
// были найдены на реальных страницах /product/item/<slug> и фото скачаны
// оттуда напрямую (см. public/img/products/<slug>.jpg) — поле image ниже
// заполнено настоящими путями, ничего не выдумано.
//
// category_slug сопоставлен по смыслу товара, group_title — по одному из уже
// существующих product_groups (см. seed_content.js) там, где совпадение
// очевидно; где подраздел не подходит один в один — оставлена общая пометка.

const products = [
  // ---- Дровяные печи (sauny) ----
  {
    category_slug: 'sauny', group_title: 'Дровяные печи',
    title: 'Дровяная печь Harvia Duo', brand: 'HARVIA',
    description: 'Каменка Harvia Duo сочетает в себе дровяную печь и камин. Каменка Harvia Duo будет служить вам долго. Корпус изготовлен из нержавеющей стали.',
    specs: 'Производитель: HARVIA\nОбъём помещения (мин): 8 м³\nОбъём помещения (макс): 36 м³\nМаксимальный вес камней: 60 кг\nСтрана изготовления: Финляндия',
    price: '', image: '/img/products/harvia-drovyanaya-pech-harvia-duo.jpg',
  },
  {
    category_slug: 'sauny', group_title: 'Дровяные печи',
    title: 'Дровяная печь Harvia Legend', brand: 'HARVIA',
    description: 'Каменка Harvia Legend отличается оригинальным дизайном и большой вместимостью камнями. Благодаря большому отсеку для камней, печь способна быстро протапливать помещение и надолго сохранять тепло.',
    specs: 'Производитель: HARVIA\nОбъём помещения (мин): 5 м³\nОбъём помещения (макс): 30 м³\nМаксимальный вес камней: 260 кг\nСтрана изготовления: Финляндия',
    price: '', image: '/img/products/harvia-drovyanaya-pech-legend.jpg',
  },
  {
    category_slug: 'sauny', group_title: 'Дровяные печи',
    title: 'Дровяная печь SAGA', brand: 'KASTOR',
    description: 'Эксклюзивный дизайн Kastor Saga сделает препровождение в сауне ещё приятнее. Уникальная форма печи позволяет лицезреть камни со всех сторон — сверху донизу. Предназначена каменка для закладки большого количества камней от 150 до 230 кг.',
    specs: 'Производитель: KASTOR\nОбъём помещения (мин): 8 м³\nОбъём помещения (макс): 27 м³\nМаксимальный вес камней: 200 кг\nСтрана изготовления: Финляндия',
    price: '', image: '/img/products/kastor-drovyanaya-pech-saga.jpg',
  },
  // ---- Электрические печи (sauny) ----
  {
    category_slug: 'sauny', group_title: 'Электрические печи',
    title: 'Электрическая печь Vega', brand: 'HARVIA',
    description: 'Электрокаменка Harvia Vega — печь, которая отличается своей простотой в использовании.',
    specs: 'Производитель: HARVIA\nОбъём помещения (макс): 14 м³\nОбъём помещения (мин): 3 м³\nМаксимальный вес камней: 20 кг\nСтрана изготовления: Финляндия',
    price: '', image: '/img/products/harvia-elektricheskaya-pech-vega.jpg',
  },
  {
    category_slug: 'sauny', group_title: 'Электрические печи',
    title: 'Электрическая печь Club', brand: 'HARVIA',
    description: 'Электрокаменки Harvia Club созданы специально для долгой эксплуатации.',
    specs: 'Производитель: HARVIA\nОбъём помещения (макс): 24 м³\nОбъём помещения (мин): 9 м³\nМаксимальный вес камней: 60 кг\nСтрана изготовления: Финляндия',
    price: '', image: '/img/products/harvia-elektricheskaya-pech-club.jpg',
  },
  {
    category_slug: 'sauny', group_title: 'Электрические печи',
    title: 'Печь для сауны SD', brand: 'TYLO',
    description: 'Электрокаменка для выносного пульта управления. Отличается оригинальным дизайном и долговечностью. Предназначены электрокаменки для саун-кабин 15-40 м³.',
    specs: 'Производитель: TYLO\nОбъём помещения (макс): 40 м³\nОбъём помещения (мин): 15 м³\nМаксимальный вес камней: 25 кг\nСтрана изготовления: Швеция',
    price: '', image: '/img/products/tylo-pech-dlya-saunyi-sd.png',
  },
  {
    category_slug: 'sauny', group_title: 'Электрические печи',
    title: 'Электрическая печь Super Savonia', brand: 'SAWO',
    description: 'Электрокаменка SAWO SUPER SAVONIA SAV-150N-Z подходит для саун с большим объёмом помещения от 13 м³ до 23 м³.',
    specs: 'Производитель: SAWO\nОбъём помещения (макс): 23 м³\nОбъём помещения (мин): 13 м³\nМаксимальный вес камней: 60 кг\nСтрана изготовления: Финляндия',
    price: '', image: '/img/products/sawo-elektricheskaya-pech-super-savonia.jpg',
  },
  // ---- Фильтры (basseyny) — характеристик и описаний на оригинале не было ----
  {
    category_slug: 'basseyny', group_title: 'Фильтры',
    title: 'Фильтр «IML»', brand: 'IML',
    description: '', specs: '', price: '', image: '/img/products/filtryi-iml.jpg',
  },
  {
    category_slug: 'basseyny', group_title: 'Фильтры',
    title: 'Фильтр «LISBOA»', brand: '',
    description: '', specs: '', price: '', image: '/img/products/filtryi-lisboa.jpg',
  },
  {
    category_slug: 'basseyny', group_title: 'Фильтры',
    title: 'Фильтр «ROMA»', brand: '',
    description: '', specs: '', price: '', image: '/img/products/filtryi-roma.jpg',
  },
  {
    category_slug: 'basseyny', group_title: 'Фильтры',
    title: 'Фильтр «TEIDE VOLCANO»', brand: '',
    description: '', specs: '', price: '', image: '/img/products/filtryi-teide-volsano.jpg',
  },
  // ---- Насосы (basseyny) ----
  {
    category_slug: 'basseyny', group_title: 'Насосы',
    title: 'Самовсасывающие насосы «AMERICA»', brand: '',
    description: 'Самовсасывающие насосы с 2-литровыми предфильтрами. Защита двигателя IP55, класс изоляции F, патрубок Q50, в комплекте муфты.',
    specs: 'Модельный ряд и цены:\nSA-033-M — 285€\nSA-050-M — 298€\nSA-075-M/T — 330€\nSA-100-M/T — 345€\nSA-125-M/T — 360€',
    price: 'от 285€', image: '/img/products/samovsasyivayuschie-nasosyi-america.jpg',
  },
  {
    category_slug: 'basseyny', group_title: 'Насосы',
    title: 'Самовсасывающие насосы «NIAGARA»', brand: '',
    description: 'Самовсасывающие насосы с предфильтрами. Защита двигателя IP54, класс F, 2800 об/мин, патрубок Q63.',
    specs: 'Модельный ряд и цены:\nNI-150-M/T — 460€\nNI-200-M/T — 527€\nNI-300-M/T — 558€',
    price: 'от 460€', image: '/img/products/samovsasyivayuschie-nasosyi-niagara.jpg',
  },
  {
    category_slug: 'basseyny', group_title: 'Насосы',
    title: 'Центробежные насосы «ATLAS»', brand: '',
    description: 'Мощные насосы без предфильтра, для высокого расхода при низком напоре. Защита двигателя IP55, 3000 об/мин, 50Гц, муфты в комплекте.',
    specs: 'Модельный ряд: AT-0400-SP — AT-1250-SP (расход 75-155 м³/ч). Цены на оригинале не указаны.',
    price: '', image: '/img/products/tsentrobezhnyie-nasosyi-atlas.jpg',
  },
  // ---- Лестницы (basseyny) ----
  {
    category_slug: 'basseyny', group_title: 'Лестницы и поручни',
    title: 'Лестница «MU»', brand: '',
    description: 'Лестницы изготовлены из полированной нержавеющей стали. Укомплектованы анкерными креплениями. Внешний диаметр трубы 42 мм.',
    specs: '', price: '', image: '/img/products/lestnitsyi-mc.jpg',
  },
  {
    category_slug: 'basseyny', group_title: 'Лестницы и поручни',
    title: 'Лестница «SL»', brand: '',
    description: 'Лестницы изготовлены из полированной нержавеющей стали. Укомплектованы анкерными креплениями. Внешний диаметр трубы 42 мм.',
    specs: '', price: '', image: '/img/products/lestnitsyi-sl.png',
  },
  // ---- Освещение (basseyny) ----
  {
    category_slug: 'basseyny', group_title: 'Освещение для бассейнов',
    title: 'Светильник встраиваемый', brand: '',
    description: 'Изготовлен из нержавеющей стали AISI-316. В комплекте с нишей и лампой 300 Вт/12В. С кабелем 2,5 м.',
    specs: '', price: '', image: '/img/products/svetilniki-vstraivaemyie.jpg',
  },
  {
    category_slug: 'basseyny', group_title: 'Освещение для бассейнов',
    title: 'Комплект «Звёздное небо» с проектором VP11 C', brand: 'Cariitti',
    description: 'Проектор 50 Вт для стеклянного и пластмассового волокна, абсолютно бесшумный. Габариты Ш:245×Д:133×В:135 мм.',
    specs: '', price: '36 600 ₽', image: '/img/products/sistema-podsvetki-cariitti-proektor-s-diskom-mertsaniya-vp-11-50t.jpg',
  },
  // ---- Форсунки/аттракционы (basseyny) ----
  {
    category_slug: 'basseyny', group_title: 'Аттракционы',
    title: 'Форсунки нержавеющие стеновые', brand: '',
    description: 'Выполнены из полированной нержавеющей стали AISI 304. Подсоединение: внешняя резьба.',
    specs: '', price: '', image: '/img/products/stenovaya-forsunka-dlya-betonnogo-basseyna.jpg',
  },
  {
    category_slug: 'basseyny', group_title: 'Аттракционы',
    title: 'Двухструйный противоток «Jet Swim 2000»', brand: '',
    description: 'Комплект компонентов противотока для организации искусственного течения в бассейне.',
    specs: 'Насос — 1940€\nКомплект обвязки под бетон — 298€\nКомплект обвязки под композит — 298€\nКомплект обвязки под плёнку — 456€\nЛицевая часть — 1370€\nПанель управления — 398€',
    price: 'от 1940€ (насос)', image: '/img/products/dvuhstruynyiy-protivotok-jet-swim-2000.jpg',
  },
  // ---- Панели управления (basseyny) ----
  {
    category_slug: 'basseyny', group_title: 'Панели управления',
    title: 'Панель управления фильтрацией', brand: '',
    description: 'Панель управления фильтрацией с таймером, суточная программа, двойная защита насосов от перегрузки.',
    specs: 'Насосы: 220В 0.25-2.2кВт, 380В до 4кВт\nСтепень защиты: IP-54\nАртикул: VC-006',
    price: '252€', image: '/img/products/panel-upravleniya-filtratsiey.jpg',
  },
  // ---- Двери (sauny / turetskie-bani) ----
  {
    category_slug: 'sauny', group_title: 'Двери для саун',
    title: 'Дверь для сауны DGB-7х19, коробка сосна', brand: 'TYLO',
    description: '', specs: '', price: '19 100 ₽', image: '/img/products/tylo-dver-dlya-saunyi-dgb.jpg',
  },
  {
    category_slug: 'turetskie-bani', group_title: 'Двери для турецких парных',
    title: 'Дверь А-Стекло для турецкой парной 70×190 см', brand: '',
    description: '', specs: '', price: '14 900 ₽', image: '/img/products/dver-anders-dlya-turetskoy-parnoy-80-200-sm.jpg',
  },
  // ---- Парогенераторы (turetskie-bani) ----
  {
    category_slug: 'turetskie-bani', group_title: 'Парогенераторы',
    title: 'Парогенератор Tylo VA/VB без пульта управления', brand: 'TYLO',
    description: 'Парогенератор Tylo VA — за счёт большого бака для воды идеально подходит для общественных бань. Требует подключения к электричеству и воде. Парогенератор Tylo VB — идентичный, только с меньшим баком для воды.',
    specs: '', price: '', image: '/img/products/parogenerator-tylo-va-vb.jpg',
  },
  // ---- ИК-кабины (sauny) ----
  {
    category_slug: 'sauny', group_title: 'ИК-кабины',
    title: 'ИК кабина HSI 30 C', brand: 'HELO',
    description: 'Инфракрасная кабина HSI 30 идеально подходит для трёх человек. Подогрев скамеек и пола. Доступны в отделке — хемлок и кедр. Оснащена CD плеером, акустической системой, оборудованием для цветотерапии.',
    specs: '', price: '286 700 ₽', image: '/img/products/helo-ik-kabina-hsi-30-c.jpg',
  },
  // ---- Водопады (basseyny, аттракционы) ----
  {
    category_slug: 'basseyny', group_title: 'Аттракционы',
    title: 'Водопад «ЭЛИТ»', brand: '',
    description: 'Изготовлен из полированной нержавеющей стали AISI-304. Укомплектован закладной.',
    specs: 'Модель Элит-500, артикул АТ-01.13, подключение 2" внутр., поток 44 м³/ч',
    price: '910€', image: '/img/products/vodopad-elit.jpg',
  },
  {
    category_slug: 'basseyny', group_title: 'Аттракционы',
    title: 'Водопад «КОБРА»', brand: '',
    description: 'Изготовлен из полированной нержавеющей стали AISI-304. Укомплектован закладной.',
    specs: 'Кобра-500 (АТ-01.04, 2" внутр., 44 м³/ч) — 860€\nКобра-700 (АТ-01.05, 2½" внутр., 63 м³/ч) — 1350€\nКобра-1000 (АТ-01.06, 2½" внутр., 75-80 м³/ч) — 1650€',
    price: 'от 860€', image: '/img/products/vodopad-kobra.jpg',
  },
  // ---- Скиммеры (basseyny) ----
  {
    category_slug: 'basseyny', group_title: 'Закладные в чашу бассейна',
    title: 'Скиммер нержавеющий 17,5 л с клапаном регулировки уровня воды', brand: '',
    description: 'Универсальный скиммер изготовлен из полированной нержавеющей стали AISI-304. Подключение: внутренняя резьба 2". Рекомендуемый поток воды 5000-7500 л/ч.',
    specs: 'Артикул: АТ-05.13', price: '290€', image: '/img/products/skimmer-v-35l-s-klapanom-regulirovki-urovnya-vodyi.jpg',
  },
  // ---- Плёнка ПВХ (basseyny) ----
  {
    category_slug: 'basseyny', group_title: 'Плёнка из ПВХ',
    title: 'Плёнка ПВХ «Haogenplast»', brand: 'Haogenplast',
    description: 'Плёнка ПВХ для отделки чаши бассейна.',
    specs: 'Синяя 25×1.6м (арт. 8044) — 20€/м²\nСиняя 25×2.05м (арт. 8283) — 20€/м²\nСиняя мраморная GALIT 103 — 29€/м²\nПод мозаику MOSAIC — 29€/м²\nСиняя с бликами SEA 108 — 29€/м²',
    price: 'от 20€/м²', image: '/img/products/plenka-pvh-haogenplast.jpg',
  },
  // ---- Горки (basseyny, аттракционы) ----
  {
    category_slug: 'basseyny', group_title: 'Аттракционы',
    title: 'Горка с поворотом', brand: '',
    description: 'Горка из полиэстера и стекловолокна, оснащена форсункой. Поручни из нержавеющей стали. Высота 1,78 м. Вес человека не должен превышать 100 кг.',
    specs: 'С поворотом вправо (ТВ030088) — 2720€\nС поворотом влево (ТВ030089) — 2720€',
    price: '2720€', image: '/img/products/gorka-s-povorotom.jpg',
  },
  // ---- Прочее (turetskie-bani, доп. оборудование) ----
  {
    category_slug: 'turetskie-bani', group_title: 'Дополнительное оборудование',
    title: 'Устройство ароматизации TYLO FRESH BASIC', brand: 'TYLO',
    description: '', specs: '', price: '53 900 ₽', image: '/img/products/ustroystvo-aromatizatsii-tylo-fresh-basic.jpg',
  },
];

module.exports = { products };
