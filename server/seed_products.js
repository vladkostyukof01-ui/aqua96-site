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

  // ==== Дополнено автоматическим обходом живого сайта aqua96.ru (2026-09-08) ====
  // Источник: /product/item/<slug> для всех 26 товарных подразделов. Тексты (описание,
  // характеристики, цены) — дословно с сайта. Фото скачаны напрямую с сайта в
  // public/img/products/<slug>.<ext>. Ничего не выдумано; где на сайте нет фото —
  // image: null (фронтенд показывает честный fallback "Фото по запросу").

  // ---- Фильтры ----
  {
    category_slug: 'basseyny', group_title: "Фильтры",
    title: "Автоматические многопозиционные вентили", brand: "",
    description: "Автоматическая система управления фильтрацией с сенсорной панелью. Режимная панель программирования обратной промывки. В комплекте с датчиком давления.",
    specs: "Тип | Артикул | Цена, €\nВентиль 1 1/2” | PS-6501 | 974\nВентиль 2” | PS-6500 | 1063",
    price: "от 974€", image: "/img/products/avtomaticheskie-mnogopozitsionnyie-ventili.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фильтры",
    title: "6-позиционные вентили", brand: "",
    description: "",
    specs: "Тип | Артикул | Цена, €\nБоковой 6-позиционный вентиль 1 1/2” | PS-6103 | 78\nБоковой 6-позиционный вентиль 2” | PS-6104 | 126\nБоковой 6-позиционный вентиль 2 1/2” | PS-6200 | 352\nБоковой 6-позиционный вентиль 3” | PS-6300 | 586",
    price: "от 78€", image: "/img/products/6-pozitsionnyie-ventili.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фильтры",
    title: "Фильтраты", brand: "",
    description: "",
    specs: "Тип | Цена, €\nПесок фракции 0,5-0,8 мм | 11,00\nГравий фракции 1,2-3 мм | 11,00",
    price: "11€", image: "/img/products/filtratyi.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фильтры",
    title: "Фильтры “MEDITERRANEO”", brand: "",
    description: "Фильтры выполнены из полиэстера истекловолокна. Максимальное рабочее давление 2,5 кг/см2. Боковой вентиль в комплект не входит. Скорость фильтрации 50 м3/ч/м2.",
    specs: "Артикул | Площадь фильтрации,м2 | Произ-ть, м3/ч | Диаметр, мм | Патрубок, дюйм | Размер D,мм | Размер H,мм | Размер M,мм | Размер N,мм | Размер A,мм | Фильтрат, кг | Цена, €\nMTR-400-L | 0,12 | 6 | 400 | 1 1/2\" | 462 | 690 | 347 | 222 | 330 | 60 | 293\nMTR-500-L | 0,20 | 8-10 | 500 | 1 1/2\" | 594 | 790 | 387 | 262 | 419 | 100 | 381\nMTR-600-L | 0,28 | 16 | 600 | 1 1/2\" | 672 | 860 | 415 | 290 | 419 | 150 | 455",
    price: "от 293€", image: "/img/products/filtryi-mediterraneo.jpg",
  },

  // ---- Насосы ----
  {
    category_slug: 'basseyny', group_title: "Насосы",
    title: "Самовсасывающие насосы “ATLAS”", brand: "",
    description: "Мощные насосы с предфильтрами, идеальны для большого потока с низким давлением. Выполнены из высококачественных материалов. Двигатель — защита IP55, 3000 оборотов в минуту, 50 Гц. Соединительные муфты в комплекте.",
    specs: "Тип | Артикул\nС предфильтром 72 м3/ч, H=10, 380 B, 3,0 кВт | АТ-0400\nС предфильтром 84 м3/ч, H=10, 380 B, 4,0 кВт | АТ-0550\nС предфильтром 118 м3/ч, H=10, 380 B, 5,5 кВт | АТ-0750\nС предфильтром 136 м3/ч, H=10, 380 B, 7,4 кВт | АТ-1000\nС предфильтром 155 м3/ч, H=10, 380 B, 9,2 кВт | АТ-1250\n\nАртикул | Размер A, мм | Размер B, мм | Размер C, мм | Размер D, мм | Размер E, мм | Размер F, мм | Размер G, мм | Размер H, мм | Размер L, мм | Цена, €\nАТ-0400 | 375 | 255 | Q90 | 405 | 470 | 330 | 200 | 535 | 820 | 1335\nАТ-0550 | 375 | 255 | Q110 | 405 | 470 | 330 | 200 | 535 | 840 | 1590\nАТ-0750 | 375 | 255 | Q110 | 405 | 470 | 330 | 200 | 535 | 840 | 2054\nАТ-1000 | 375 | 255 | Q110 | 405 | 470 | 330 | 200 | 535 | 910 | 2735\nАТ-1250 | 375 | 255 | Q110 | 405 | 470 | 330 | 200 | 535 | 955 | 2738",
    price: "от 1335€", image: "/img/products/samovsasyivayuschie-nasosyi-atlas.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Насосы",
    title: "Самовсасывающие насосы “DOLL”", brand: "",
    description: "Самовсасывающие насосы c предфильтрами, выполненные из высококачественных материалов. Съемный предфильтр на 8 л. Механическая часть из керамики и нержавеющей стали. Трехфазный двигатель c защитой IP54, изоляция класса F. Самовсасывание с глубины 2,5 м. Соединительные муфты в комплекте.",
    specs: "Тип | Артикул\nС предфильтром 50 м3/ч, H=10, 380 B, 2,6 кВт | HP-350T (08003)\nС предфильтром 66 м3/ч, H=10, 380 B, 2,9 кВт | HP-400T (08004)\nС предфильтром 78 м3/ч, H=10, 380 B, 4,0 кВт | HP-550T (08005)\n\nАртикул | Размер A, мм | Размер B, мм | Размер C, мм | Размер D, мм | Размер E, мм | Размер F, мм | Размер G, мм | Размер H, мм | Размер I, мм | Размер J, мм | Цена, €\nHP-350T (08003) | 760 | 430 | 385 | Q90 | 287 | 200 | 140 | 530 | 65 | 468 | 1306\nHP-400T (08004) | 800 | 430 | 385 | Q90 | 287 | 200 | 140 | 530 | 65 | 468 | 1405\nHP-550T (08005) | 820 | 430 | 385 | Q90 | 287 | 200 | 140 | 530 | 65 | 468 | 1427",
    price: "от 1306€", image: "/img/products/samovsasyivayuschie-nasosyi-doll.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Насосы",
    title: "Центробежные чугунные и бронзовые насосы “FDN”", brand: "",
    description: "Мощные насосы с предфильтрами, идеальны для большого потока с низким давлением. Двигатель c защитой IP55, 3000 оборотов в минуту, 50 Гц.",
    specs: "Артикул | Модель | Тип | Цена, €\n1FN30200T4V | FDN-14 | С предфильтром 32 м3/ч, H=10, 380 B, 1,5 кВт | 1864\n1FN30300T4V | FDN-15 | С предфильтром 46 м3/ч, H=10, 380 B, 2,25 кВт | 1890\n1FN30406T4V | FDN-16 | С предфильтром 57 м3/ч, H=10, 380 B, 3,0 кВт | 2070\n1FN30407T4V | FDN-17 | С предфильтром 61 м3/ч, H=10, 380 B, 1,5 кВт | 2102\n1FN30558T4V | FDN-18 | С предфильтром 75 м3/ч, H=10, 380 B, 3,75 кВт | 2480\n1FN30559T4V | FDN-19 | С предфильтром 98 м3/ч, H=10, 380 B, 4,5 кВт | 2934\n1FN30750T4V | FDN-20 | С предфильтром 120 м3/ч, H=10, 380 B, 5,6 кВт | 2985\n1FN31000T4V | FDN-21 | С предфильтром 140 м3/ч, H=10, 380 B, 7,5 кВт | 3115\n1FN31250T4V | FDN-22 | С предфильтром 158 м3/ч, H=10, 380 B, 9,4 кВт | 3530",
    price: "от 1864€", image: "/img/products/tsentrobezhnyie-chugunnyie-i-bronzovyie-nasosyi-fdn.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Насосы",
    title: "Центробежные насосы “NEW BCC”", brand: "",
    description: "Мощные насосы без предфильтров. Корпус из полипропилена, усиленного стекловолокном, обеспечивает длительный срок службы. Двигатель c защитой IP55, изоляция класса F. Соединительные муфты в комплекте.",
    specs: "Тип | Артикул | Цена, €\nБез предфильтра 44 м3/ч, H=8, 230 B, 2,2 кВт | NEWBCC-300M | 675\nБез предфильтра 44 м3/ч, H=8, 380 B, 2,2 кВт | NEWBCC-300T | 675\nБез предфильтра 63 м3/ч, H=8, 380 B, 3,0 кВт | NEWBCC-400T | 846\nБез предфильтра 75 м3/ч, H=8, 380 B, 4,1 кВт | NEWBCC-550T | 864",
    price: "от 675€", image: "/img/products/tsentrobezhnyie-nasosyi-new-bcc.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Насосы",
    title: "Самовсасывающие насосы “BIG DISCOVERY”", brand: "",
    description: "Самовсасывающие насосы c предфильтрами, выполненные из высококачественных материалов. Предфильтр на 8 л. Механическая часть из керамики и нержавеющей стали. Трехфазный двигатель c защитой IP55, изоляция класса F, 50 Гц. Самовсасывание с глубины 2 м. Соединительные муфты в комплекте.",
    specs: "Тип | Артикул | Цена, €\nС предфильтром 40 м3/ч, H=10, 380 B, 2,2 кВт | DY-350-T | 850\nС предфильтром 55 м3/ч, H=10, 380 B, 2,9 кВт | DY-400-T | 910\nС предфильтром 64 м3/ч, H=10, 380 B, 4,0 кВт | DY-550-T | 960",
    price: "от 850€", image: "/img/products/samovsasyivayuschie-nasosyi-big-discovery.jpg",
  },

  // ---- Панели управления ----
  {
    category_slug: 'basseyny', group_title: "Панели управления",
    title: "Панель управления фильтрацией и теплообменником", brand: "",
    description: "Панель управления фильтрацией и теплообменником, с таймером и суточной программой для насосов. Встроенный термостат 0-40°С, датчик температуры. Логическая схема. Двойная степень защиты насоса от перегрузок. Технические параметры: Насос 220 В от 0,25 кВт до 2,2 кВт. Насос 380 В до 4 кВт. Защита IP-54.",
    specs: "Артикул | Цена, €\nVC-041 | 540",
    price: "540€", image: "/img/products/panel-upravleniya-filtratsiey-i-teploobmennikom.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Панели управления",
    title: "Панель управления переливной емкостью и системой автоматического долива", brand: "",
    description: "Логическая схема. Управляет подпиткой, сервоклапаном и насосом фильтрации. Защита IP-54. В комплекте 4 уровневых зонда.",
    specs: "Артикул | Цена, €\nVC-072 | 370",
    price: "370€", image: "/img/products/panel-upravleniya-perelivnoy-emkostyu-i-sistemoy-avtomaticheskogo-doliva.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Панели управления",
    title: "Панель управления аттракционами", brand: "",
    description: "Панель управления аттракционами без таймера, с пневмопускателем. Логическая схема. Двойная степень защиты насоса от перегрузок. Технические параметры: Насос 220 В от 0,25 кВт до 2,2 кВт. Насос 380 В до 4 кВт. Защита IP-54",
    specs: "Артикул | Цена, €\nVC-045 | 352",
    price: "352€", image: "/img/products/panel-upravleniya-attraktsionami.jpg",
  },

  // ---- Лестницы и поручни ----
  {
    category_slug: 'basseyny', group_title: "Лестницы и поручни",
    title: "Поручень для выхода из бассейна", brand: "",
    description: "Комплект состоит из фланцев и одного поручней, изготовленных из полированной нержавеющей стали. Внешний диаметр трубы 43 мм. Сталь AISI-316",
    specs: "Артикул | Размеры, мм | Цена за комплект, €\nL | A | B\n07781 | 1250 | 800 | 203 | 315",
    price: "800€", image: "/img/products/poruchen-dlya-vyihoda-iz-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Лестницы и поручни",
    title: "Поручни для выхода из бассейна", brand: "",
    description: "Комплект состоит из фланцев и двух поручней, изготовленных из полированной нержавеющей стали. Внешний диаметр трубы 43 мм. Сталь AISI-316",
    specs: "Артикул | Размеры, мм | Цена за комплект, €\nL | A | B\n00037 | 1524 | 800 | 855 | 648",
    price: "800€", image: "/img/products/poruchni-dlya-vyihoda-iz-basseyna-1.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Лестницы и поручни",
    title: "Поручни для выхода из бассейна", brand: "",
    description: "Комплект состоит из фланцев и двух поручней, изготовленных из полированной нержавеющей стали. Внешний диаметр трубы 43 мм. Сталь AISI-304",
    specs: "Артикул | Цена за комплект, €\nPS-0300 | 374",
    price: "374€", image: "/img/products/poruchni-dlya-vyihoda-iz-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Лестницы и поручни",
    title: "Нижние части лестниц", brand: "",
    description: "Лестницы изготовлены из полированной нержавеющей стали. Внешний диаметр трубы 43 мм. Ступени “Luxe”. Сталь AISI-304",
    specs: "Тип | Артикул | Цена, €\nЛестница с 2 ступенями | PS-0313pl | 205\nЛестница с 3 ступенями | PS-0314pl | 280\nЛестница с 4 ступенями | PS-0315pl | 332\nЛестница с 5 ступенями | PS-0316pl | 374\n\n\nA | B | C | D\n2 | 470 | 310 | 190 | 250\n3 | 720 | 560 | 190 | 250\n4 | 970 | 810 | 190 | 250\n5 | 1220 | 1060 | 190 | 250",
    price: "от 205€", image: "/img/products/nizhnie-chasti-lestnits.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Лестницы и поручни",
    title: "Лестницы “OV”", brand: "",
    description: "Лестницы изготовлены из полированной нержавеющей стали. Укомплектованы анкерными креплениями. Ступени “Luxe”. Внешний диаметр трубы 42 мм. Сталь AISI-316",
    specs: "Тип | Артикул | Цена, €\nЛестница с 3 ступенями | 8921 | 315\nЛестница с 4 ступенями | 8922 | 352\nЛестница с 5 ступенями | 8923 | 396\n\n\nA | B | C | D | E | F | G\n3 | 1640 | 680 | 250 | 960 | 842 | 180 | 500\n4 | 1890 | 680 | 250 | 1210 | 842 | 180 | 500\n5 | 2140 | 680 | 250 | 1460 | 842 | 180 | 500",
    price: "от 315€", image: "/img/products/lestnitsyi-ov.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Лестницы и поручни",
    title: "Лестницы «MIXTO»", brand: "",
    description: "Лестницы изготовлены из полированной нержавеющей стали. Укомплектованы анкерными креплениями. Ступени “Luxe”. Внешний диаметр трубы 43 мм. Сталь AISI-304 Сталь AISI-316",
    specs: "Тип | Артикул | Цена, €\nЛестница с 3 ступенями | PS-0306 | 246\nЛестница с 4 ступенями | PS-0307 | 292\nЛестница с 5 ступенями | PS-0308 | 320\n\nТип | Артикул | Цена, €\nЛестница с 3 ступенями | PS-0356 | 329\nЛестница с 4 ступенями | PS-0357 | 380\nЛестница с 5 ступенями | PS-0358 | 408\n\n\nA | B | C | D | E | F\n3 | 960 | 590 | 645 | 250 | 190 | 550\n4 | 1210 | 590 | 645 | 250 | 190 | 550\n5 | 1460 | 590 | 645 | 250 | 190 | 550",
    price: "от 246€", image: "/img/products/lestnitsyi-mixto.jpg",
  },

  // ---- Переливной лоток ----
  {
    category_slug: 'basseyny', group_title: "Переливной лоток",
    title: "Опорный профиль решетки из ABS — пластика", brand: "",
    description: "Подходит для решетки высотой 22 и 35 мм. Внутренние размеры: 24 мм Х 36 мм.",
    specs: "Артикул | Цена, €\n00224 | 11",
    price: "11€", image: "/img/products/opornyiy-profil-reshetki-iz-abs-plastika.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Переливной лоток",
    title: "Дренаж лотка перелива из ABS — пластика", brand: "",
    description: "",
    specs: "Артикул | Цена, €\n00302 | 11",
    price: "11€", image: "/img/products/drenazh-lotka-pereliva-iz-abs-plastika.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Переливной лоток",
    title: "Угловые элементы 90 градусов для переливных каналов из ABS-пластика", brand: "",
    description: "",
    specs: "Тип | Артикул | Цена, €\nВысота 35 мм, ширина 195 мм | RJ032383 | 36\nВысота 35 мм, ширина 245 мм | RJ032384 | 38\nВысота 35 мм, ширина 295 мм | RJ032385 | 48\nВысота 35 мм, ширина 335 мм | RJ032386 | 56",
    price: "от 36€", image: "/img/products/uglovyie-elementyi-90-gradusov-dlya-perelivnyih-kanalov-iz-abs-plastika.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Переливной лоток",
    title: "Угловые элементы 45 градусов для переливных каналов из ABS-пластика", brand: "",
    description: "",
    specs: "Тип | Артикул | Цена, €\nВысота 35 мм, ширина 195 мм | RJ032391 | 30\nВысота 35 мм, ширина 245 мм | RJ032392 | 36\nВысота 35 мм, ширина 295 мм | RJ032393 | 38\nВысота 35 мм, ширина 335 мм | RJ032394 | 41",
    price: "от 30€", image: "/img/products/uglovyie-elementyi-45-gradusov-dlya-perelivnyih-kanalov-iz-abs-plastika.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Переливной лоток",
    title: "Модули решетки перелива из ABS-пластика", brand: "",
    description: "В 1 м — 42 элемента.",
    specs: "Тип | Артикул | Цена, €\nВысота 35 мм, ширина 195 мм | 1748220 | 36\nВысота 35 мм, ширина 245 мм | 1748221 | 42\nВысота 35 мм, ширина 295 мм | 1748222 | 45\nВысота 35 мм, ширина 335 мм | 1748223 | 49",
    price: "от 36€", image: "/img/products/moduli-reshetki-pereliva-iz-abs-plastika.jpg",
  },

  // ---- Закладные в чашу бассейна ----
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Донная форсунка для пленочного бассейна", brand: "",
    description: "Выполнена из-ABS пластика. С внешней резьбой 2” и внутренней 1 1/2”. Максимальный поток 12 м3/ч. Рекомендуемый поток 5 — 6 м3/ч.",
    specs: "Артикул | Цена, €\nА-043 | 28",
    price: "28€", image: "/img/products/donnaya-forsunka-dlya-plenochnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Донная форсунка для бетонного бассейна", brand: "",
    description: "Выполнена из ABS-пластика. С наружной резьбой 2” и внутренней 1 1/2”. Максимальный поток 12 м3/ч. Рекомендуемый поток 5 — 6 м3/ч.",
    specs: "Артикул | Цена, €\nА-042 | 12",
    price: "12€", image: "/img/products/donnaya-forsunka-dlya-betonnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Закладные из ABS-пластика для форсунок", brand: "",
    description: "Подсоединение: внутренняя резьба.",
    specs: "\nС резьбой 1 1/2” | A-028 | 10\nПод вклейку Д 50 | A-029 | 10",
    price: "", image: "/img/products/zakladnyie-iz-abs-plastika-dlya-forsunok.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Форсунка подключения водного пылесоса для пленочного бассейна", brand: "",
    description: "Выполнена из ABS-пластика. Внешняя резьба 2 дюйма. Внутренний диаметр 50 мм.",
    specs: "\nА-053 | 25",
    price: "", image: "/img/products/forsunka-podklyucheniya-vodnogo-pyilesosa-dlya-plenochnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Стеновая форсунка для пленочного бассейна", brand: "",
    description: "Выполнена из ABS-пластика. С внешней резьбой 2” и внутренней d50.",
    specs: "\nA-031 | 4,5 | 27",
    price: "", image: "/img/products/stenovaya-forsunka-dlya-plenochnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Форсунка подключения водного пылесоса для бетонного бассейна", brand: "",
    description: "Выполнена из ABS-пластика. Внутреннее соединение Д50 и внешнее Д63 под вклейку.",
    specs: "\nА-030 | 9",
    price: "", image: "/img/products/forsunka-podklyucheniya-vodnogo-pyilesosa-dlya-betonnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Форсунки донные нержавеющие для пленочного бассейна", brand: "",
    description: "Выполнены из полированной нержавеющей стали AISI-304. Подсоединение: внешняя резьба.",
    specs: "\n1 1/2” для пленочного бассейна | АТ03.04 | 32\n1 1/2” для пленочного бассейна | АТ03.05 | 33\n1 1/2” для пленочного бассейна | АТ03.06 | 34",
    price: "", image: "/img/products/forsunki-donnyie-dlya-plenochnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Форсунки донные нержавеющие для бетонного бассейна", brand: "",
    description: "Выполнены из полированной нержавеющей стали AISI 304. Подсоединение: внешняя резьба.",
    specs: "\n1 1/2” для бетонного бассейна | АТ03.07 | 5 | 29\n1 1/2” для бетонного бассейна | АТ03.08 | 5 | 34\n1 1/2” для бетонного бассейна | АТ03.09 | 5 | 33",
    price: "", image: "/img/products/forsunki-donnyie-dlya-betonnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Форсунки нержавеющие стеновые", brand: "",
    description: "Выполнены из полированной нержавеющей стали AISI 304. Подсоединение: внешняя резьба.",
    specs: "\n1 1/2” для пленочного бассейна | АТ03.01 | 4,5 | 40\n1 1/2” для бетонного бассейна | АТ03.02 | 4,5 | 34\n1” для пленочного бассейна | АТ03.03 | 2 | 35",
    price: "", image: "/img/products/forsunki-stenovyie.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Водозаборы из нержавеющей стали", brand: "",
    description: "Выполнены из полированной нержавеющей стали AISI-304 АТ-06.01 АТ-06.02 АТ-06.03 АТ-06.04 АТ-06.08 АТ-06.09",
    specs: "Диаметр мм | Тип | Артикул | Подсоед., дюйм | Поток м3 /ч | Цена, €\n155 | Для пленочного бассейна | АТ-06.01 | 2\" внутр. | 13,5 | 72\n160 | Для пленочного бассейна | АТ-06.02 | 2\" внутр. | 13,5 | 69\n250 | Для пленочного бассейна | АТ-06.03 | 2 1/2\" внешн. | 20 | 175\n250 | Для пленочного бассейна | АТ-06.04 | 2 1/2\" внешн. | 20 | 210\n105 | Для бетонного бассейна | АТ-06.08 | 11/2\" внешн. | 10 | 40\n155 | Для бетонного бассейна | АТ-06.09 | 2\" внутр. | 13,5 | 52",
    price: "от 40€", image: "/img/products/vodozaboryi-iz-nerzhaveyuschey-stali.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Водозабор из ABS — пластика с патрубком Q90", brand: "",
    description: "С накладкой из ABS — пластика с патрубком Q90",
    specs: "Тип | Артикул | Поток м3 /ч | Цена, €\nДля бетонного бассейна | 11796 | 20-26 | 46\nДля пленочного бассейна | 11795 | 20-26 | 95",
    price: "от 46€", image: "/img/products/vodozabor-iz-abs-plastika-s-patrubkom-q90.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Водозабор из ABS — пластика для бетонного бассейна с патрубком Q63", brand: "",
    description: "",
    specs: "Артикул | Поток м3 /ч | Цена, €\nА048 | 13, 5 | 30",
    price: "30€", image: "/img/products/vodozabor-iz-abs-plastika-dlya-betonnogo-basseyna-s-patrubkom-q63.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Квадратные донные сливы из нержавеющей стали с патрубком", brand: "",
    description: "Выполнены из полированной нержавеющей стали AISI-304. Подсоединение: внутренняя резьба. АТ-04.08 АТ-04.06 АТ-04.07 АТ-04.05",
    specs: "Тип | Артикул | Поток м3 /ч | Размер, мм | Цена, €\n2\" для пленочного бассейна | АТ-04.05 | 7 | 150х150 | 56\n2\" для бетонного бассейна | АТ-04.07 | 7 | 150х150 | 46\n2\" для пленочного бассейна | АТ-04.06 | 7 | д.154 | 65\n2 1/2\" для пленочного бассейна | АТ-04.08 | 13 | 250х250 | 180",
    price: "от 46€", image: "/img/products/kvadratnyie-donnyie-slivyi-iz-nerzhaveyuschey-stali-s-patrubkom.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Донный слив с патрубком для общественного бетонного бассейна", brand: "",
    description: "Выполнены из ABS-пластика с накладкой из нержавеющей стали AISI-316.",
    specs: "Тип | Артикул | Поток м3 /ч | Цена, €\nДля бетонного бассейна Д.90 |  | 27 | 380\nДля пленочного бассейна Д.90 |  | 27 | 664",
    price: "от 380€", image: "/img/products/donnyiy-sliv-s-patrubkom-dlya-obschestvennogo-betonnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Квадратный донный слив из ABS — пластика для пленочного бассейна", brand: "",
    description: "",
    specs: "Артикул | Патрубок, дюйм | Поток м3 / ч | Цена, €\nA014L | 2\"(внутр.) | 13 | 64",
    price: "64€", image: "/img/products/kvadratnyiy-donnyiy-sliv-iz-abs-plastika-dlya-plenochnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Квадратный донный слив из ABS — пластика для бетонного бассейна", brand: "",
    description: "",
    specs: "Артикул | Патрубок, дюйм | Поток м3 / ч | Цена, €\nA014 | 2\"(внутр.) | 13 | 26",
    price: "26€", image: "/img/products/kvadratnyiy-donnyiy-sliv-iz-abs-plastika-dlya-betonnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Скиммер нержавеющий 17,5 л универсальный", brand: "",
    description: "Cкиммер изготовлен из полированной нержавеющей стали AISI-304. Подключение: внутренняя резьба 2”. Рекомендуемый поток воды 5000-7500 л/ч.",
    specs: "Артикул | Тип | Цена, €\nАТ-05.01 | Универсальный | 260",
    price: "260€", image: "/img/products/skimmer-v-15l.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Скиммеры навесные", brand: "",
    description: "Cкиммеры из ABS-пластика. Монтируются на узкий или широкий борт бассейна. Комплектуются шлангами для подключения насоса, подающей форсункой. Предусматривается подключение шланга водного пылесоса Q38. Рекомендуемый поток воды 5000 л/ч.",
    specs: "Тип | Артикул | Цена, €\nSK-2 на узкий борт | 2032100 | 258\nSK-2 на широкий борт | 2032110 | 258",
    price: "258€", image: "/img/products/skimmeryi-navesnyie.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Скиммеры для пленочного бассейна", brand: "",
    description: "Cкиммеры из ABS-пластика с квадратной крышкой. Рекомендуемый поток воды 5000-7500 л/ч. Без декоративной рамки С декоративной рамкой A-001 A-003, A-003-L A-002, A-004, A-004-L",
    specs: "Артикул | Размеры, мм | Цена, €\nA | B | C | D | E | F | G | H | I | J | L | \nA-003-L | 238 | 185 | 1 1\\2\" | 50 | 237 | 125 | 40 | 403 | 200 | 148 | 273 | 92\n\nАртикул | Размеры, мм | Цена, €\nA | B | C | D | E | F | G | H | I | J | L | \nA-004-L | 422 | 207 | 1 1\\2\" | 50 | 237 | 125 | 40 | 403 | 386 | 170 | 455 | 100",
    price: "185€", image: "/img/products/skimmeryi-dlya-plenochnogo-basseyna.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Закладные в чашу бассейна",
    title: "Скиммеры для бетонного бассейна", brand: "",
    description: "Cкиммеры из ABS-пластика с квадратной крышкой. Рекомендуемый поток воды 5000-7500 л/ч. Без декоративной рамки С декоративной рамкой",
    specs: "Артикул | Размеры, мм | Цена, €\nA | B | C | D | E | F | G | H | I | J | L | \nA-001 | 220 | 168 | 1 1\\2\" | 50 | 237 | 125 | 40 | 403 | 200 | 148 | 253 | 48\nA-003 | 238 | 185 | 1 1\\2\" | 50 | 237 | 125 | 40 | 403 | 200 | 148 | 273 | 76\n\nАртикул | Размеры, мм | Цена, €\nA | B | C | D | E | F | G | H | I | J | L | \na002 | 422 | 207 | 1 1\\2\" | 50 | 237 | 125 | 40 | 403 | 386 | 170 | 455 | 76\na004 | 422 | 207 | 1 1\\2\" | 50 | 237 | 125 | 40 | 403 | 386 | 170 | 455 | 94",
    price: "от 168€", image: "/img/products/skimmeryi-dlya-betonnogo-basseyna.jpg",
  },

  // ---- Освещение для бассейнов ----
  {
    category_slug: 'basseyny', group_title: "Освещение для бассейнов",
    title: "Галогенная лампа GE PAR 56, 300 Вт, 12 В", brand: "",
    description: "",
    specs: "\nMP0902 | 37",
    price: "", image: "/img/products/galogennaya-lampa-ge-par-56-300-vt-12-v.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Освещение для бассейнов",
    title: "Трансформаторы понижающие", brand: "",
    description: "Изготовлены в соответствии со стандартом EN 60742 (UNE 20339)",
    specs: "\n130 Вт | PS-0721 | 73\n300 Вт | PS-0722 | 100\n600 Вт | PS-0723 | 176",
    price: "", image: "/img/products/transformatoryi-ponizhayuschie.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Освещение для бассейнов",
    title: "Светильник “MINI”", brand: "",
    description: "Изготовлен из ABS-пластика. Укомплектован кабелем (3 м) и галогеновой лампой 50 Вт.",
    specs: "\nуниверсальный (без закладной) | B-033-PL | 94\nуниверсальный (с закладной) | B-042-L | 103",
    price: "", image: "/img/products/svetilnik-mini.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Освещение для бассейнов",
    title: "Светильники “Standart”", brand: "",
    description: "Изготовлены из ABS-пластика. В комплекте с нишей и лампой 300 Вт /12 В. С кабелем 3 м.",
    specs: "\nС накладкой из ABS-пластика | B-032 | 100\nС накладкой из нерж. стали | B-032-P | 140\n\n\nС накладкой из ABS-пластика | B-039 | 140\nС накладкой из нерж. стали | B-039-P | 182",
    price: "", image: "/img/products/svetilniki-standart.jpg",
  },

  // ---- Теплообменники ----
  {
    category_slug: 'basseyny', group_title: "Теплообменники",
    title: "Теплообменники «HI-FLO»", brand: "",
    description: "Спиральные теплообменники выполнены из нержавеющей стали AISI-316. Устанавливаются горизонтально. Рекомендуемые температуры теплоносителя T1=90°C, T2=70°C. Максимальная рабочая температура 130°C. Максимальное рабочее давление: первичный контур — 60 бар, вторичный контур — 10 бар.",
    specs: "\nл/мин | Перепад давл. | л/мин | Перепад давл.\n11391 | 259 | 13 | 25 | 0,9 | 200 | 0,6\n11392 | 294 | 28 | 25 | 1,7 | 300 | 1,6\n11394 | 542 | 75 | 60 | 2,1 | 300 | 0,9",
    price: "", image: "/img/products/teploobmenniki-hi-flo.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Теплообменники",
    title: "Теплообменники «MAXI-FLO»", brand: "",
    description: "Трубчатые теплообменники выполнены из нержавеющей стали AISI-316. Устанавливаются вертикально. Рекомендуемые температуры теплоносителя T1=90°C, T2=70°C. Максимальная рабочая температура 130°C. Максимальное рабочее давление: первичный контур — 10 бар, вторичный контур — 10 бар.",
    specs: "\nкВт | ккал/ч | л/мин | Перепад давл. | л/мин | Перепад давл.\n11365 | 362 | 40 | 34 | 25 | 0,05 | 200 | 0,8\n11366 | 470 | 60 | 51 | 30 | 0,2 | 250 | 1,4\n11367 | 560 | 75 | 65 | 35 | 0,4 | 300 | 1,8\n11368 | 930 | 120 | 100 | 50 | 0,7 | 360 | 2,4",
    price: "", image: "/img/products/teploobmenniki-maxi-flo.jpg",
  },

  // ---- Электронагреватели ----
  {
    category_slug: 'basseyny', group_title: "Электронагреватели",
    title: "Пластиковые электрические проточные нагреватели", brand: "",
    description: "В комплекте с датчиком потока, однополюсным термостатом 0-45°С и однополюсным реле защиты от перегрева 60°С. Корпус и распред. коробка из пластика, тэн из сплава Incoloy 825. Поставляется с муфтами для клеевого соед. труб даметром 50 мм. Максимальное рабочее давление 6 бар, 380 В.",
    specs: "\n141600 | 3 | 262\n141601 | 6 | 272\n141602 | 9 | 280\n141603 | 12 | 290\n141604 | 15 | 298\n141605 | 18 | 316",
    price: "", image: "/img/products/plastikovyie-elektricheskie-protochnyie-nagrevateli.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Электронагреватели",
    title: "Электрические проточные нагреватели из нержавеющей стали", brand: "",
    description: "В комплекте с датчиком, однополюсным термостатом 0-45°С и однополюсным реле защиты от перегрева 60°С. Колба нагревателя и подключения из нерж. стали. Максимальное рабочее давление 10 бар, 380 В.",
    specs: "\nАртикул | Мощность, кВт | Цена, €\nс датчиком потока\n13981403 | 3 | 578\n13981406 | 6 | 586\n13981409 | 9 | 595\n13981412 | 12 | 604\n13981415 | 15 | 514\n13981418 | 18 | 622\n\n\nс датчиком потока\n13981403 | 3 | 578\n13981406 | 6 | 586\n13981409 | 9 | 595\n13981412 | 12 | 604\n13981415 | 15 | 514\n13981418 | 18 | 622",
    price: "", image: "/img/products/elektricheskie-protochnyie-nagrevateli-iz-nerzhaveyuschey-stali.jpg",
  },

  // ---- Обеззараживание воды ----
  {
    category_slug: 'basseyny', group_title: "Обеззараживание воды",
    title: "Камеры дегазации", brand: "",
    description: "Камера дегазации служит для удаления из воды избыточного количества озоновоздушной смеси. Комплектуется к определенной модели озонатора.",
    specs: "\nPZ2-DG1/2 | PZ2-1, PZ2-2 | 1405\nPZ2-DG12B | PZ2-4, PZ2-6, PZ2-8 | 1524",
    price: "", image: "/img/products/kameryi-degazatsii.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Обеззараживание воды",
    title: "Генераторы озона", brand: "",
    description: "Простота и безопасность конструкции. Не требуют концентратора кислорода, осушителя воздуха, контактного резервуара, фильтров с активированным углём и другого специализированного оборудования. Могут быть легко вмонтированы в уже действующую систему водоподготовки бассейна любого размера. Использование озонаторов улучшает органолептические свойства воды и позволяет снизить расход хлора на 80%. Генераторы озона для бассейнов",
    specs: "\nPZ2-1 | 1 - 89 м3 | 0,5 | 2030\nPZ2-2 | 90 — 179 м3 | 1 | 2840\nPZ2-4 | 180 — 359 м3 | 2 | 5045",
    price: "", image: "/img/products/generatoryi-ozona.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Обеззараживание воды",
    title: "УФ лампы для ультрафиолетовых установок", brand: "",
    description: "",
    specs: "\nDUV 70-18405 | для E 5 | 105\nDUV 70-18410 | для E 15 | 118\nDUV 70-18420 | для E 20 | 155\nDUV 70-18440 | для E 40 | 185\nLPE 000005 | для серии HO | 236",
    price: "", image: "/img/products/uf-lampyi-dlya-ultrafioletovyih-ustanovok.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Обеззараживание воды",
    title: "Ультрафиолетовые установки для частных бассейнов", brand: "",
    description: "Установки ультрафиолетовой обработки воды серии E. Серия Е обеспечивает УФ-излучение с дозой 30 мДж/см2. Корпус выполнен из сверхпрочного пластика для работы в агрессивной среде. Конструкция корпуса обеспечивает легкую замену УФ лампы. Срок службы УФ ламп 13 000 часов в зависимости от количества включений. Улучшают органолептические свойства воды. Позволяют снизить общую дозу и содержание остаточного активного хлора в воде бассейна в 2-5 раз.",
    specs: "\nE 5 | 7 | 0,03 | 1 | 2” | 45,8 | 884\nE 15 | 13 | 0,058 | 1 | 2” | 62,7 | 932\nE 20 | 18 | 0,08 | 1 | 2” | 98,4 | 1028\nE 40 | 25 | 0,09 | 1 | 2” | 116,8 | 1090",
    price: "", image: "/img/products/ultrafioletovyie-ustanovki-dlya-chastnyih-basseynov.jpg",
  },

  // ---- Дозирующее оборудование ----
  {
    category_slug: 'basseyny', group_title: "Дозирующее оборудование",
    title: "Панель управления серии TPR", brand: "",
    description: "Для измерения и регулирования pH и редокс-потенциала (ORP) в воде (700х600).",
    specs: "\n9900299064 | Kontrol TPR603 | Два насоса Tekna TPR 603-PVDF. Датчики pH и редокс-потенциала (ORP). Система самокалибровки и контроля эффективности датчиков. Промываемый (многоразовый) фильтр-очиститель. Буферные растворы. | 2471,2\n9900299061 | Kontrol TPR800 | Два насоса Tekna TPR 800-PVDF. Датчики pH и редокс-потенциала (ORP). Система самокалибровки и контроля эффективности датчиков. Промываемый (многоразовый) фильтр-очиститель. Буферные растворы. | 2616,8",
    price: "", image: "/img/products/panel-upravleniya-serii-tpr.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Дозирующее оборудование",
    title: "Приборы для контроля pH и редокс-потенциала, серия «Basic»", brand: "",
    description: "Устройство регулирования pH и редокс-потенциала воды в корпусе с классом защиты уровня IP 65. Подходит для установки в узких местах (размеры 270х240х140). Индикация измеряемых показаний на дисплее. Возможность самокабилровки, отображения текущего качества электрода и наличие функции удержания «HOLD». Поставляется в комплекте с принадлежностями для легкого и правильного монтажа (включено в цену товара).",
    specs: "\nSPMBASPA0000 | pH-MV-1,5 | Показания pH в пределах 0 — 14 с разрешением 0,1 pH Показания редокс-потенциала в пределах ±1000 мВ с разрешением 5 мВ. Перистальтический насос: 1,5 л/час, 1,5 бар Электропитание: 230 В, 50-60 Гц. | 1348\nSPMBASPA5000 | pH-MV-5 | Показания pH в пределах 0 — 14 с разрешением 0,1 pH Показания редокс-потенциала в пределах ±1000 мВ с разрешением 5 мВ. Перистальтический насос: 5 л/час, 1,5 бар Электропитание: 230 В, 50-60 Гц. | 1486,4",
    price: "", image: "/img/products/priboryi-dlya-kontrolya-ph-i-redoks-potentsiala-seriya-basic.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Дозирующее оборудование",
    title: "Устройства регулирования pH, серия «Basic»", brand: "",
    description: "Устройства регулирования pH в корпусе с классом защиты уровня IP65. Подходит для установки в узких местах (размеры 162х234х108). Индикация измеряемых показаний постедством светодиодных индикаторов (LED). Возможность самокалибровки, отображения текущего качества электрода и наличие функции удержания «HOLD». Поставляется в комплекте с принадлежностями для правильного и быстрого монтажа (включены в цену товара).",
    specs: "\nSPHBASPA0000 | pH — 1,5 | Показания pH в пределах 6,2 — 8,0 pH. Разрешение (точность) показаний: 0,2 pH. Перистальтический насос: 1,5 л/час, 1,5 бар Электропитание: 230 В, 50 — 60 Гц. | 869.6\nSPHBASPA5000 | pH — 5 | Показания pH в пределах 6,2 — 8,0 pH. Разрешение (точность) показаний: 0,2 pH. Перистальтический насос: 5 л/час, 1,5 бар Электропитание: 230 В, 50 — 60 Гц. | 938.4",
    price: "", image: "/img/products/ustroystva-regulirovaniya-ph-seriya-basic.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Дозирующее оборудование",
    title: "Дозирующие насосы “INVIKTA”", brand: "",
    description: "Дозирующий насос с производительностью, регулируемой в пределах 0 -100%. Электропитание: стандартно 90-230 В AC, по отдельному требованию 20-60 В AC. Установочный комплект: фильтр всасывающей линии, клапан системы впрыска, винтовое монтажное устройство, кабель. Входная всасывающая трубка (ПВХ), выходная нагнетательная трубка (полиэтилен). Тефлоновая мембрана. Опционально — датчик уровня на всасывающей линии.",
    specs: "\nKCL631NVFW00 Клапаны и седла из FPM | 5 л/ч, 2 бар | 211,2\nKCL632NVFW00 Клапаны и седла из FPM | 2 л/ч, 7 бар | 211,2\nKCL633NVEW00 Клапаны и седла из EPDM | 5 л/ч, 5 бар | 211,2",
    price: "", image: "/img/products/doziruyuschie-nasosyi-invikta.jpg",
  },

  // ---- Химические реагенты «hth» ----
  {
    category_slug: 'basseyny', group_title: "Химические реагенты «hth»",
    title: "Химия для бассейнов и аквапарков. Дезинфекция", brand: "",
    description: "",
    specs: "\nС800501H9 | МЕДЛЕННЫЙ СТАБИЛИЗИРОВАННЫЙ ХЛОР В ТАБЛЕТКАХ по 200 гр. | 1,2 | кг | 6 | 20\nС800503H8 | МЕДЛЕННЫЙ СТАБИЛИЗИРОВАННЫЙ ХЛОР В ТАБЛЕТКАХ по 200 гр. | 5 | кг | 4 | 65\nС800506H8 | МЕДЛЕННЫЙ СТАБИЛИЗИРОВАННЫЙ ХЛОР В ТАБЛЕТКАХ по 200 гр. | 25 | кг | 1 | 285\nC800611H9 | БЫСТРЫЙ СТАБИЛИЗИРОВАННЫЙ ХЛОР В ТАБЛЕТКАХ по 20 гр. | 1,2 | кг | 6 | 18\nC800612H9 | БЫСТРЫЙ СТАБИЛИЗИРОВАННЫЙ ХЛОР В ТАБЛЕТКАХ по 20 гр. | 5 | кг | 4 | 56\nC800614H9 | БЫСТРЫЙ СТАБИЛИЗИРОВАННЫЙ ХЛОР В ТАБЛЕТКАХ по 20 гр. | 25 | кг | 1 | 272",
    price: "", image: "/img/products/himiya-dlya-basseynov-i-akvaparkov-dezinfektsiya.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Химические реагенты «hth»",
    title: "Химия для бассейнов и аквапарков.Регуляция уровня РН", brand: "",
    description: "",
    specs: "\nS800812H9 | ПОРОШОК рH МИНУС | 2 | кг | 6 | 13\nS800813H9 | ПОРОШОК рH МИНУС | 5 | кг | 6 | 24\nS800815HK | ПОРОШОК рH МИНУС | 45 | кг | 1 | 145\nS800832H9 | ПОРОШОК рH ПЛЮС | 1,2 | кг | 6 | 10",
    price: "", image: "/img/products/himiya-dlya-basseynov-i-akvaparkov-regulyatsiya-urovnya-rn.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Химические реагенты «hth»",
    title: "Химия для бассейнов и аквапарков. Профилактика / коррекция", brand: "",
    description: "",
    specs: "\nL800731H9 | АЛЬГИЦИД | 1 | л | 6 | 9\nL800735H9 | АЛЬГИЦИД | 5 | л | 4 | 32\nL800739H1 | АЛЬГИЦИД | 20 | л | 1 | 87\nL800780H9 | БЫСТРЫЙ ЖИДКИЙ КОАГУЛЯНТ | 1 | л | 6 | 8,5\nL800785H1 | ЖИДКИЙ КОАГУЛЯНТ БЫСТРОГО ДЕЙСТВИЯ | 20 | л | 1 | 82\nL800810H9 | ЖИДКИЙ КОАГУЛЯНТ ШОК | 1 | л | 6 | 10",
    price: "", image: "/img/products/himiya-dlya-basseynov-i-akvaparkov-profilaktika-korrektsiya.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Химические реагенты «hth»",
    title: "Химия для Бассейнов и аквапарков. Тестеры и перезаправки", brand: "",
    description: "",
    specs: "\nA850308H1 | ТЕСТЕР ДЛЯ ЧАСТНЫХ БАССЕЙНОВ (хлор/рН) | 1 | шт | 12 | 17\nA850320H1 | Перезаправка для ТЕСТЕРА ЧАСТНЫХ БАССЕЙНОВ | 1 | шт | 24 | 13\nA590270H1 | ПУЛТЕСТЕР (хлор/рН) | 1 | шт | 12 | 22\nA501230Q1 | Тестер АКТИВНЫЙ КИСЛОРОД/PHMB/pH | 1 | шт | 12 | 32",
    price: "", image: "/img/products/himiya-dlya-basseynov-i-akvaparkov-testeryi-i-perezapravki.jpg",
  },

  // ---- Сматывающие устройства ----
  {
    category_slug: 'basseyny', group_title: "Сматывающие устройства",
    title: "Автоматические сматывающие устройства “ROLLEASY 2”", brand: "",
    description: "Корпус устройств выполнен из алюминия. Жалюзи из ПВХ. В комплекте с электроприводом, панелью управления и жалюзи. Доп. опция: пульт ДУ — (заказывается отдельно). Стандартные модели.",
    specs: "\n4 х 8 м | 4300 | 4800\n4,5 х 9 м | 5230 | 5480\n5 х 10 м | 5750 | 6050\n3,5 х 5м | 3510 | 3860",
    price: "", image: "/img/products/avtomaticheskie-smatyivayuschie-ustroystva-rolleasy.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Сматывающие устройства",
    title: "Плавающее пузырьковое покрытие", brand: "",
    description: "Покрытие может быть изготовлено под размеры бассейна заказчика. Ширина рулона 5,95м",
    specs: "\n67099 | 17",
    price: "", image: "/img/products/plavayuschee-puzyirkovoe-pokryitie.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Сматывающие устройства",
    title: "Сматывающее устройство «G-10» с фланцами", brand: "",
    description: "Суппорт с двумя фланцевыми креплениями. Труба выполнена из нержавеющей стали AISI-304 диаметром 40мм. Поставляется с 13 крепежными штрипками и штангой. Высота оси 350 мм.",
    specs: "\n1868250 | Телескопическая штанга 2,7/4,4 м | 560\n1868000 | Телескопическая штанга 3,7/5,4 м | 650\n1868500 | Телескопическая штанга 5,4/7,1 м | 710",
    price: "", image: "/img/products/smatyivayuschee-ustroystvo-g-10-1.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Сматывающие устройства",
    title: "Сматывающее устройство «G-11» с анкерными креплениями", brand: "",
    description: "Суппорт с двумя анкерными креплениями. Труба выполнена из нержавеющей стали AISI-304 диаметром 40мм. Поставляется с 13 крепежными штрипками и штангой. Высота оси 350 мм.",
    specs: "\n1867250 | Телескопическая штанга 2,7/4,4 м | 560\n1867000 | Телескопическая штанга 3,7/5,4 м | 620\n1867500 | Телескопическая штанга 5,4/7,1 м | 680",
    price: "", image: "/img/products/smatyivayuschee-ustroystvo-g-10.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Сматывающие устройства",
    title: "Сматывающее устройство «Aquaroll»", brand: "",
    description: "Т-образный суппорт с одной подвижной опорой. Труба выполнена из нержавеющей стали AISI-304 диаметром 40мм Поставляется с 13 крепежными штрипками и штангой. Высота оси 420мм",
    specs: "\n1862250 | Телескопическая штанга 2,5/4 м | 540\n1862000 | Телескопическая штанга 4/5,1 м | 620\n1862500 | Телескопическая штанга 5/6,1 м | 680",
    price: "", image: "/img/products/smatyivayuschee-ustroystvo-aquaroll.jpg",
  },

  // ---- Аттракционы ----
  {
    category_slug: 'basseyny', group_title: "Аттракционы",
    title: "Одноструйный противоток “Jet Swim 1200”", brand: "",
    description: "",
    specs: "\nНасос | 1301280 | 1640\nКомплект обвязки с закладной под бетон | 1301230 | 254\nКомплект обвязки с закладной для композитных бассейнов | 1301220 | 254\nКомплект обвязки с закладной под пленку | 1301210 | 390\nЛицевая часть | 1301200 | 825\nПанель управления | 1301290 | 380\n\n\nкВт | 2,2\nВ | 380\nА | 4,8\nл/мин | 900\nD | 2”\nМатериал | бронза/сталь",
    price: "", image: "/img/products/odnostruynyiy-protivotok-jet-swim-1200.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Аттракционы",
    title: "Гидромассажные форсунки, расход воды 7-11 м3/ч", brand: "",
    description: "Диаметр подводящего трубопровода для воды 50 мм. Диаметр подводящего трубопровода для воздуха 32 мм. В комплект входит универсальная закладная.",
    specs: "\nНерегулируемая форсунка из ABS-пластика, лиц. часть 2”М | 33586 | 42\nРегулируемая форсунка из ABS-пластика, лиц. часть 2 1/2” М | 32641 | 42\nЛицевая часть из нерж. стали 2 1/2” П | AT-03.26 | 40",
    price: "", image: "/img/products/gidromassazhnyie-forsunki-rashod-vodyi-7-11-m3-ch.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Аттракционы",
    title: "Вращающаяся одноструйная форсунка, расход воды 9 м3/ч", brand: "",
    description: "Изготовлен из ABS-пластика.",
    specs: "\n20297 | 62",
    price: "", image: "/img/products/vraschayuschayasya-odnostruynaya-forsunka-rashod-vodyi-9-m3-ch.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Аттракционы",
    title: "Компрессоры", brand: "",
    description: "Корпус и колесо компрессора, а так же канал бокового выброса выполнены из литого алюминия. Компрессоры мощностью от 2,2 кВт крепятся только вертикально.",
    specs: "\n0,85 | не более 1,6 | 145 | 220 | 1 1/2” | HРЕ 3010-1 | 660\n0,85 | не более 1,6 | 145 | 380 | 1 1/2” | НРЕ 3010 | 660\n1,3 | не более 1,9 | 145 | 220 | 1 1/2” | HРЕ 3015-1 | 795\n1,3 | не более 2,0 | 145 | 380 | 1 1/2” | HPE 3015 | 795\n1,6 | не более 2,0 | 210 | 220 | 2” | HB 4019 | 1095\n2,2 | не более 1,9 | 210 | 380 | 2” | HB 5026 | 1280\n3,0 | не более 2,0 | 318 | 380 | 2” | HB 6037 | 1840\n5,5 | не более 2,9 | 318 | 380 | 2” | HB 7063 | 2675\n7,5 | не более 3,0 | 530 | 380 | 2 1/2” | HB 8086 | 2920",
    price: "", image: "/img/products/kompressoryi.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Аттракционы",
    title: "Квадратные панели гейзера", brand: "",
    description: "Изготовлен из полированной нержавеющей стали AISI-304. Подсоединение: внутренняя резьба",
    specs: "\n400 х 400 | Для пленочного бассейна | АТ-02.07 | 2” | 305\n420 х 420 | Для пленочного бассейна | АТ-02.08 | 2” | 350\n400 х 400 | Для бетонного бассейна | АТ-02.09 | 2” | 240\n600 х 600 | Для пленочного бассейна | АТ-02.10 | 2” | 560\n600 х 600 | Для бетонного бассейна | АТ-02.11 | 2” | 430\n500 х 500 | Для пленочного бассейна | АТ-02.28 | 2” | 440\n500 х 500 | Для бетонного бассейна | АТ-02.29 | 2” | 360\n800 х 800 | Для пленочного бассейна | АТ-02.30 | 2” | 630\n800 х 800 | Для бетонного бассейна | АТ-02.31 | 2” | 560",
    price: "", image: "/img/products/kvadratnyie-paneli-geyzera.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Аттракционы",
    title: "Круглые панели гейзера", brand: "",
    description: "Изготовлен из полированной нержавеющей стали AISI-304",
    specs: "\n155 | Для пленочного бассейна | АТ-02.01 | 2” внутр. | 55\n250 | Для пленочного бассейна | АТ-02.02 | 2” внешн. | 190\n250 | Для бетонного бассейна | АТ-02.03 | 2” внешн. | 160\n320 | Для пленочного бассейна | АТ-02.04 | 2” внешн. | 210\n340 | Для пленочного бассейна | АТ-02.05 | 2” внешн. | 240\n320 | Для бетонного бассейна | АТ-02.06 | 2” внешн. | 180\n400 | Для пленочного бассейна | АТ-02.22 | 2” внешн. | 360\n500 | Для пленочного бассейна | АТ-02.23 | 2” внешн. | 445\n500 | Для бетонного бассейна | АТ-02.33 | 2” внешн. | 360",
    price: "", image: "/img/products/kruglyie-paneli-geyzera.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Аттракционы",
    title: "Водопад “КОСТА”", brand: "",
    description: "Изготовлен из полированной нержавеющей стали AISI-304. Укомплектован закладной",
    specs: "\nКоста-400 | АТ-01.07 | 2” внутр. | 44 | 1 | 690\nКоста-500 | АТ-01.08 | 2 ”внутр. | 44 | 1 | 840\nКоста-1000 | АТ-01.09 | 2 ”внутр. | 75 — 80 | 2 | 1250",
    price: "", image: "/img/products/vodopad-kosta.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Аттракционы",
    title: "Горка прямая", brand: "",
    description: "Горка из полиэстера и стекловолокна, оснащена форсункой. Поручни выполнены из нержавеющей стали. Вес человека не должен превышать 100 кг",
    specs: "\n1,5 м | ТВ180085 | 2350\n2,0 м | ТВ180086 | 2540",
    price: "", image: "/img/products/gorka-pryamaya.jpg",
  },

  // ---- Фитинги из ПВХ ----
  {
    category_slug: 'basseyny', group_title: "Фитинги из ПВХ",
    title: "Клей", brand: "",
    description: "",
    specs: "\n02426 | 1 л | 22\n02427 | 0,5 л | 12,5",
    price: "", image: "/img/products/kley.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фитинги из ПВХ",
    title: "Трубы ПВХ,PN-6", brand: "",
    description: "",
    specs: "\nY00TV016 | 16 | 5м | 1,64\nY00TV017 | 20 | 5 м | 1,68\nY00TV018 | 25 | 5 м | 1,6\nY00TV019 | 32 | 5 м | 2,1\nY00TV020 | 40 | 5 м | 2,4\nY00TV021 | 50 | 5 м | 2,7\nY00TV005 | 63 | 5 м | 3,8\nY00TV006 | 75 | 6 м | 5,8\nY00TV007 | 90 | 6 м | 8\nY00TV008 | 110 | 6 м | 9,4\nY00TV009 | 125 | 6 м | 13,5",
    price: "", image: "/img/products/trubyi-pvh-pn-6.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фитинги из ПВХ",
    title: "Шаровый кран", brand: "",
    description: "",
    specs: "\n1010016 | 16 | 48 N | 7,8\n1010020 | 20 | 48 N | 7,8\n1010025 | 25 | 48 N | 8,9\n1010032 | 32 | 30 N | 11,8\n1010040 | 40 | 36 I | 13,6\n1010050 | 50 | 24 I | 18,3\n1010063 | 63 | 16 I | 22,2\n1010075 | 75 | 6 J | 82,2\n1010090 | 90 | 6 J | 111,8\n1010091 | 90 | 6 L | 114,2\n1010100 | 110 | 6 L | 122,4\n1010110 | 110 | 4 K | 208,9\n1010125 | 125 | 4 K | 218,8",
    price: "", image: "/img/products/sharovyiy-kran.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фитинги из ПВХ",
    title: "Муфта разъемная", brand: "",
    description: "",
    specs: "\n7401016 | 16 | 100 P | 2\n7401020 | 20 | 100 P | 2\n7401025 | 25 | 100 Q | 2,3\n7401032 | 32 | 100 R | 2,5\n7401040 | 40 | 100 S | 4,9\n7401050 | 50 | 72 H | 5,1\n7401063 | 63 | 60 T | 8\n7401075 | 75 | 12 U | 17,3\n7401090 | 90 | 12 U | 23,4\n7401110 | 110 | 12 I | 35",
    price: "", image: "/img/products/mufta-razemnaya.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фитинги из ПВХ",
    title: "Переход с внешней резьбой", brand: "",
    description: "",
    specs: "\n7307016 | 16-20х1/2” | 80 A | 0,65\n7307020 | 20-25х3/4” | 50 A | 0,8\n7307025 | 25-32х1” | 90 B | 0,93\n7307032 | 32-40х1 1/4” | 96 C | 1,24\n7307040 | 40-50х1 1/2” | 130 D | 2,22\n7307050 | 50-63х2” | 72 D | 2,5\n7307063 | 63-75х2 1/2” | 45 D | 4\n7307075 | 75-90х3” | 45 H | 4,62\n7308016 | 16-20х3/8” | 100 A | 0,65\n7308020 | 20-25х1/2” | 70 A | 0,8\n7308025 | 25-32х3/4” | 40 A | 0,98\n7308032 | 32-40х1” | 60 B | 1,34\n7308040 | 40-50х1 1/4” | 70 C | 1,48\n7308050 | 50-63х1 1/2” | 60 C | 3,1\n7308063 | 63-75х2” | 72 D | 4,42\n7308075 | 75-90х2 1/2” | 80 H | 7,7\n7308090 | 90-110х3” | 45 H | 12,8\n7308110 | 110-125х4” | 24 H | 12,8",
    price: "", image: "/img/products/perehod-s-vneshney-rezboy.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фитинги из ПВХ",
    title: "Муфта", brand: "",
    description: "",
    specs: "\n7105016 | 16 | 80 A | 0,6\n7105020 | 20 | 60 A | 0,6\n7105025 | 25 | 40 A | 0,7\n7105032 | 32 | 60 B | 0,85\n7105040 | 40 | 84 C | 1,34\n7105050 | 50 | 100 D | 1,8\n7105063 | 63 | 60 D | 2,5\n7105075 | 75 | 36 D | 4,9\n7105090 | 90 | 18 D | 7,1\n7105110 | 110 | 12 D | 10,7\n7105125 | 125 | 16 H | 16\n7105140 | 140 | 9 H | 23,7\n7105160 | 160 | 6 H | 32\n7105200 | 200 | 3 H | 47,8\n7105225 | 225 | 2 H | 78\n7105250 | 250 | 2 K | 156\n7105315 | 315 | 1 K | 218",
    price: "", image: "/img/products/mufta.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фитинги из ПВХ",
    title: "Тройник 90°", brand: "",
    description: "",
    specs: "\n7103016 | 16 | 60 A | 0,54\n7103020 | 20 | 30 A | 0,64\n7103025 | 25 | 45 B | 0,85\n7103032 | 32 | 60 C | 1,2\n7103040 | 40 | 68 D | 2,1\n7103050 | 50 | 76 H | 2,4\n710063 | 63 | 45 H | 4,6\n7103075 | 75 | 27 H | 6,8\n7103090 | 90 | 14 H | 11,6\n7103110 | 110 | 9 H | 18,6\n7103125 | 125 | 6 H | 36,8\n7103140 | 140 | 4 H | 55,8\n7103160 | 160 | 3 H | 54,2\n7103200 | 200 | 2 K | 98,1\n7103225 | 225 | 1 H | 133,4\n7103250 | 250 | 1 K | 317\n7103315 | 315 | 1 | 571",
    price: "", image: "/img/products/troynik-90.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фитинги из ПВХ",
    title: "Угол 45°", brand: "",
    description: "",
    specs: "\n7102016 | 16 | 100 A | 0,56\n7102020 | 20 | 60 A | 0,69\n7102025 | 25 | 80 B | 0,93\n7102032 | 32 | 100 C | 1,26\n7102040 | 40 | 120 D | 2,1\n7102050 | 50 | 120 H | 2\n7102063 | 63 | 60 H | 3,52\n7102075 | 75 | 40 H | 5,3\n7102090 | 90 | 26 H | 8,2\n7102110 | 110 | 16 H | 22,7\n7102125 | 125 | 8 H | 23,3\n7102140 | 140 | 6 H | 45,7\n7102160 | 160 | 5 H | 46\n7102200 | 200 | 4 K | 67,8\n7102225 | 225 | 2 H | 99\n7102250 | 250 | 2 K | 226\n7102315 | 315 | 1 K | 427",
    price: "", image: "/img/products/ugol-45.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Фитинги из ПВХ",
    title: "Угол 90°", brand: "",
    description: "",
    specs: "\n7101016 | 16 | 100 A | 0,55\n7101020 | 20 | 50 A | 0,55\n7101025 | 25 | 75 B | 0,6\n7101032 | 32 | 90 C | 0,8\n7101040 | 40 | 100 D | 1,2\n7101050 | 50 | 100 H | 2\n7101063 | 63 | 60 H | 3,52\n7101075 | 75 | 38 H | 5,1\n7101090 | 90 | 20 H | 8,2\n7101110 | 110 | 12 H | 14,5\n7101125 | 125 | 8 H | 25,6\n7101140 | 140 | 6 H | 44,2\n7101160 | 160 | 4 H | 45\n7101200 | 200 | 3 K | 76,5\n7101225 | 225 | 2 K | 111\n7101250 | 250 | 1 K | 277\n7101315 | 315 | 1 | 490",
    price: "", image: "/img/products/ugol-90.jpg",
  },

  // ---- Плёнка из ПВХ ----
  {
    category_slug: 'basseyny', group_title: "Плёнка из ПВХ",
    title: "Аксессуары для пленки ПВХ", brand: "",
    description: "",
    specs: "\nЖидкий ПВХ “Haogenplast”, 1л | 15012 | 45\nЖидкий ПВХ “Alkorplan”, бесцветный, 1л | 81037-00001 | 45\nЖидкий ПВХ “Alkorplan”, синий, 1л | 81039-52341 | 45\nУгол крепежный, внешний 0,05 х 0,05 х 2 м | 15009 | 15\nПолоса крепежная, 2 м | 15011 | 9\nМеталлический лист с ПВХ напылением, 2 х 1 м | 5098 | 120\nМеталлический лист “Alkorplan” с ПВХ напылением, 2 х 1 м | 81170-52341 | 120\nУтеплитель, 3,2 х 100 м | 15007 | 2,80/м2",
    price: "", image: "/img/products/aksessuaryi-dlya-plenki-pvh.jpg",
  },
  {
    category_slug: 'basseyny', group_title: "Плёнка из ПВХ",
    title: "Пленка ПВХ «Alkorplan»", brand: "",
    description: "Пленка ПВХ “Alkorplan”",
    specs: "\nПленка “Alkorplan 2000”, синяя, 25 х 1,65 м | 41,25 | 35216-203 | 29\nПленка “Alkorplan 2000”, синяя, 25 х 2,05 м | 51,25 | 35216-007 | 29\nПленка ребристая “Alkorplan 2000”, синяя, 25 х 1,65 м | 41,25 | 81116-52341 | 40\nПленка “Alkorplan 3000”, «Byzance мозаика» (неразмытая), 25 х 1,65 м | 41,25 | 35417-41161 | 40\nПленка “Alkorplan 3000”, «Carrara мрамор», 25 х 1,65 м | 41,25 | 35417-00134 | 40\nПленка “Alkorplan 3000”, «Marble мрамор», 25 х 1,65 м | 41,25 | 35417-00007 | 40\nПленка “Alkorplan 3000”, «Mosaic мозаика», (размытая), 25 х 1,65 м | 41,25 | 35417-63604 | 40\nПленка “Alkorplan 3000”, «Persia Blue мозаика», 25 х 1,65 м | 41,25 | 35417-00197 | 40\nРазметка дорожки, черная, 25 х 0,25 м | 6,25 | 81113-99036 | 34",
    price: "", image: "/img/products/plenka-pvh-alkorplan.jpg",
  },

  // ---- Электрические печи ----
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "HARVIA Электрическая печь Delta", brand: "HARVIA",
    description: "Электрическая печь Harvia Delta разработана специально для небольших саун, но достаточно мощная для своего компактного размера. Каменка имеет большой отсек для камней, что обеспечивает быстрый и равномерный прогрев помещения. За счет своей конструкции. Электрокаменку можно устанавливать в угол, что заметно экономит пространство в сауне.",
    specs: "Производитель: HARVIA\nОбъем помещения: 4,5 м3\nОбъем помещения (мин): 1,3 м3\nМаксимальный вес камней: 11 кг\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Ширина, мм | Глубина, мм | Высота, мм | Вес печи, кг | Пульт управления | Парогенератор | Код | Цена, евро\nHARVIA Электрическая печь Delta HD230400 D23 | 2,3 | 340 | 200 | 635 | 8 | встроенный | нет | ЕНН00764 | 279\nHARVIA Электрическая печь Delta HD360400 D36 | 3,6 | 340 | 200 | 635 | 8 | встроенный | нет | ЕНН00765 | 279",
    price: "279€", image: "/img/products/harvia-elektricheskaya-pech-delta.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "HARVIA Электрическая печь Topclass", brand: "HARVIA",
    description: "Электрическая печь Harvia Topclass отличается своей простотой в использовании и сдержанностью в стиле. Каменка имеет встроенную панель управления, которая расположена сбоку (также ее можно переставлять на противоположную сторону) и имеет подсветку. Электрокаменка изготовлена из нержавеющей стали.",
    specs: "Производитель: HARVIA\nОбъем помещения: 12 м3\nОбъем помещения (мин): 2 м3\nМаксимальный вес камней: 20 кг\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Ширина, мм | Глубина, мм | Высота, мм | Вес печи, кг | Пульт управления | Парогенератор | Код | Цена,евро\nHARVIA Электрическая печь Topclass HKV300400 KV30 со встроенным пультом | 3 | 450 | 300 | 650 | 16 | встроенный | нет | ЕНН00778 | 370\nHARVIA Электрическая печь Topclass HKV450400 KV45 со встроенным пультом | 4,5 | 450 | 300 | 650 | 16 | встроенный | нет | ЕНН00779 | 379\nHARVIA Электрическая печь Topclass HKV600400 KV60 со встроенным пультом | 6 | 450 | 300 | 650 | 16 | встроенный | нет | ЕНН00780 | 384\nHARVIA Электрическая печь Topclass HKV800400 KV80 со встроенным пультом | 8 | 450 | 300 | 650 | 16 | встроенный | нет | ЕНН00781 | 410",
    price: "от 370€", image: "/img/products/harvia-elektricheskaya-pech-topclass.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "HARVIA Электрическая печь Topclass Combi", brand: "HARVIA",
    description: "Электрическая печь Harvia Topclass Combi — это отличное сочетание печи и парогенератора, благодаря чему Вы можете наслаждаться разными видами сауны. С электрокаменкой Topclass Combi Вы можете наслаждаться мягким влажным паром и разнообразными ароматами. Печь предполагает настенную установку. Имеется емкость для воды в размере 5 литров, а также печь оснащена резервуаром для ароматизаторов.",
    specs: "Производитель: HARVIA\nОбъем помещения: 14 м3\nОбъем помещения (мин): 3 м3\nМаксимальный вес камней: 20 кг\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Ширина, мм | Глубина, мм | Высота, мм | Вес печи, кг | Пульт управления | Парогенератор | Код | Цена, евро\nHARVIA Электрическая печь Topclass Combi Automatic HKSE500400A KV50SEA, с парогенератором автомат | 5 | 400 | 360 | 640 | 6 | есть, в комплект не входит | есть | ЕНН00790 | 791\nHARVIA Электрическая печь Topclass Combi Automatic HKSE600400A KV60SEA, с парогенератором автомат | 6 | 400 | 360 | 640 | 16 | есть, в комплект не входит | есть | ЕНН00791 | 798\nHARVIA Электрическая печь Topclass Combi Automatic HKSE800400A KV80SEA, с парогенератором автомат | 8 | 400 | 360 | 640 | 16 | есть, в комплект не входит | есть | ЕНН00792 | 805\nHARVIA Электрическая печь Topclass Combi Automatic HKSE900400A KV90SEA, с парогенератором автомат | 9 | 400 | 360 | 640 | 16 | есть, в комплект не входит | есть | ЕНН00793 | 811\nHARVIA Электрическая печь Topclass Combi HKSE500400 KV50SE с парогенератором, без пульта | 5 | 400 | 360 | 640 | 16 | есть, в комплект не входит | есть | ЕНН00786 | 636\nHARVIA Электрическая печь Topclass Combi HKSE600400 KV60SE с парогенератором, без пульта | 6 | 400 | 360 | 640 | 16 | есть, в комплект не входит | есть | ЕНН00787 | 644\nHARVIA Электрическая печь Topclass Combi HKSE800400 KV80SE с парогенератором, без пульта | 8 | 400 | 360 | 640 | 16 | есть, в комплект не входит | есть | ЕНН00788 | 647\nHARVIA Электрическая печь Topclass Combi HKSE900400 KV90SE с парогенератором, без пульта | 9 | 400 | 360 | 640 | 16 | есть, в комплект не входит | есть | ЕНН00789 | 657",
    price: "от 636€", image: "/img/products/harvia-elektricheskaya-pech-topclass-combi.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "HARVIA Электрическая печь Moderna", brand: "HARVIA",
    description: "E – отдельный пульт управления EE – пульт в комплекте",
    specs: "Производитель: HARVIA\nОбъем помещения: 12 м3\nОбъем помещения (мин): 3 м3\nМаксимальный вес камней: 20 кг\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Ширина, мм | Глубина, мм | Высота, мм | Вес печи, кг | Пульт управления | Парогенератор | Код | Цена, евро\nHARVIA Электрическая печь Moderna V80E-1 Platinum V 380 с выносным пультом в комплекте | 8 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН03214 | 434\nHARVIA Электрическая печь Moderna E/1-3phase HVE450230M V45E-1 Black с выносным пультом в комплекте | 4,5 | 410 | 310 | 540 | 15 | в комплекте | нет | ЕНН04215 | 410\nHARVIA Электрическая печь Moderna E/1-3phase HVE450230PL V45E-1 Platinum с выносным пультом в комплекте | 4,5 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН00822 | 410\nHARVIA Электрическая печь Moderna E/1-3phase HVE450230SA V45E-1 Champagne с выносным пультом в комплекте | 4,5 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН00823 | 410\nHARVIA Электрическая печь Moderna E/1-3phase HVE450230TI V45E-1 Titanium с выносным пультом в комплекте | 4,5 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН00824 | 410\nHARVIA Электрическая печь Moderna E/1-3phase HVE600230M V60E-1 Black с выносным пультом в комплекте | 6 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН04216 | 417\nHARVIA Электрическая печь Moderna E/1-3phase HVE600230PL V60E-1 Platinum с выносным пультом в комплекте | 6 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН00825 | 417\nHARVIA Электрическая печь Moderna E/1-3phase HVE600230SA V60E-1 Champagne с выносным пультом в комплекте | 6 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН00826 | 417\nHARVIA Электрическая печь Moderna E/1-3phase HVE600230TI V60E-1 Titanium с выносным пультом в комплекте | 6 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН00827 | 417\nHARVIA Электрическая печь Moderna E/1-3phase HVE800230M V80E-1 Black с выносным пультом в комплекте | 8 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН04217 | 434\nHARVIA Электрическая печь Moderna E/1-3phase HVE800230PL V80E-1 Platinum с выносным пультом в комплекте | 8 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН00828 | 434\nHARVIA Электрическая печь Moderna E/1-3phase HVE800230SA V80E-1 Champagne с выносным пультом в комплекте | 8 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН00829 | 434\nHARVIA Электрическая печь Moderna E/1-3phase HVE800230TI V80E-1 Titanium с выносным пультом в комплекте | 8 | 410 | 310 | 580 | 15 | в комплекте | нет | ЕНН0083 | 434",
    price: "от 410€", image: "/img/products/harvia-elektricheskaya-pech-moderna.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "HARVIA Электрическая печь Figaro", brand: "HARVIA",
    description: "Электрокаменка Harvia Figaro разбавит ваш интерьер своим интересным дизайном. Большой отсек для камней, позволит прогреть большое помещение, также Вы можете регулировать выделение пара. Печь устанавливается на пол при этом опирается на стену. Панель управления расположена снижу спереди каменки.",
    specs: "Производитель: HARVIA\nОбъем помещения: 14 м3\nОбъем помещения (мин): 6 м3\nМаксимальный вес камней: 90 кг\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Ширина, мм | Глубина, мм | Высота, мм | Вес печи, кг | Пульт управления | Парогенератор | Код | Цена, евро\nHARVIA Электрическая печь Figaro HFG700400 FG70 со встроенным пультом | 6,8 | 480 | 260 | 940 | 20 | встроенный | нет | ЕНН00887 | 407\nHARVIA Электрическая печь Figaro HFG900400 FG90 со встроенным пультом | 9 | 480 | 260 | 260 | 20 | встроенный | нет | ЕНН00888 | 452",
    price: "от 407€", image: "/img/products/harvia-elektricheskaya-pech-figaro.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "HARVIA Электрическая печь в талькохлориде Fuga", brand: "HARVIA",
    description: "Электрическая печь Harvia Fuga неповторима в своем исполнении. Внешний корпус оборудован стеатитом. Электрокаменка гарантирует образования приятного влажного пара. Благодаря своей конструкции печь способно равномерно прогревать помещения и долго сохранять тепло в помещениях. Печь управляется отдельной панелью.",
    specs: "Производитель: HARVIA\nОбъем помещения: 14 м3\nОбъем помещения (мин): 5 м3\nМаксимальный вес камней: 30 кг\nСтрана изготовления: Финляндия\n\nМодель | FU60 | FU90 | FU90E\nМощность, кВт | 6,0 | 9,0 | 9,0\nМинимальный объем парильни, м3 | 5 | 8 | 8\nМаксимальны объем парильни, м3 | 8 | 14 | 14\nМинимальная высота парильни, см | 190 | 190 | 190\nРазмеры: ширина, мм | 480 | 480 | 480\nРазмеры: высота, мм | 900 | 900 | 900\nРазмеры: глубина, мм | 235 | 235 | 235\nМасса, кг | 20 + камни 30 | 20 + камни 30 | 20 + камни 30\nТип электропитания: 3-фазный | 400 V 3N | 400 V 3N | 400 V 3N\nСоединительный кабель, мм2 | 5x1,5 | 5x2,5 | 5x2,5\nПредохранитель A | 3x10 | 3x16 | 3x16\nПульт управления | - | - | C150, C150VKK\nБезопасное расстояние A до стены, мм | 50 | 70 | 70\nБезопасное расстояние перед печью B, мм | 230 | 290 | 290\nБезопасное расстояние D до потолка, мм | 1000 | 1000 | 1000\nБезопасное расстояние E до пола, мм | 30 | 30 | 30\nНастраиваемая температура мин-макс, °C | 40–110 | 40–110 | 40–110\nВремя непрерывной работы, час | 2–8 | 2–8 | 2–8\nВремя задержки включения, час | 0–18 | 0–18 | 0–18\nЦена, евро | 820 | 882 | ",
    price: "", image: "/img/products/harvia-elektricheskaya-pech-v-talkohloride-fuga.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "HARVIA Электрическая печь KIVI", brand: "HARVIA",
    description: "Электрокаменки Harvia Kivi имеют необычный дизайн. За счет большого отсек для камней,Вы сможете прогреть большое помещение, также вам удастся регулировать выделение пара. Печь Harvia Kivi можно устанавливать рядом с полками.",
    specs: "Производитель: HARVIA\nОбъем помещения: 14 м3\nОбъем помещения (мин): 6 м3\nМаксимальный вес камней: 100 кг\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Ширина, мм | Глубина, мм | Высота, мм | Вес печи, кг | Пульт управления | Парогенератор | Код | Цена, евро\nHARVIA Электрическая печь KIVI HPI700400 PI 70 с выносным пультом | 6,9 | 370 | 370 | 1200 | 15 | в комплекте | нет | ЕНН00881 | 741\nHARVIA Электрическая печь KIVI HPI900400 PI 90с выносным пультом | 9 | 370 | 370 | 1200 | 15 | в комплекте | нет | ЕНН00882 | 811",
    price: "от 741€", image: "/img/products/harvia-elektricheskaya-pech-kivi.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "HARVIA Электрическая печь Club Combi", brand: "HARVIA",
    description: "Электрокаменки Harvia Club Combi созданы специально для долгой эксплуатации. печь способна работать долгое время и обеспечивать теплом большое по размеру помещение. Каменки изготовлены из высококачественных материалов, что гарантирует долгое время службы. Электрокаменки Harvia Club Combi сочетают в себе функции парогенератора и печи.",
    specs: "Производитель: HARVIA\nОбъем помещения: 24 м3\nОбъем помещения (мин): 9 м3\nМаксимальный вес камней: 60 кг\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Ширина, мм | Глубина, мм | Высота, мм | Вес печи, кг | Пульт управления | Парогенератор | Код | Цена, евро\nHARVIA Электрическая печь Club Combi HRKG110400S K11GS с парогенератором, без пульта | 11 | 505 | 490 | 700 | 30 | есть, в комплект не входит | есть | ЕНН00874 | 1008\nHARVIA Электрическая печь Club Combi HRKG135400S K13,5GS с парогенератором, без пульта | 13,5 | 505 | 490 | 700 | 60 | есть, в комплект не входит | есть | ЕНН00875 | 1055\nHARVIA Электрическая печь Club Combi HRKG150400S K15GS с парогенератором, без пульта | 15 | 505 | 490 | 700 | 30 | есть, в комплект не входит | есть | ЕНН00876 | 1132",
    price: "от 1008€", image: "/img/products/harvia-elektricheskaya-pech-club-combi.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "Tylo Электрическая печьCombi Compact RC4 с пультом управления Н1", brand: "TYLO",
    description: "Технические характеристики",
    specs: "Производитель: TYLO\nОбъем помещения: 4.5 м3\nОбъем помещения (мин): 1.2 м3\nМаксимальный вес камней: 7 кг\nСтрана изготовления: Швеция\n\n\nМинимальный объем сауны, м3 | 1,2\nМаксимальный объем сауны, м3 | 4,5\nМасса камней, кг | 7\nРазмеры: ширина, мм | 310\nРазмеры: глубина, мм | 225\nРазмеры: высота, мм | 400\nМасса печи, кг | 12\nНеобходимое напряжение, V | 220/380\nЦена. евро | 1217",
    price: "", image: "/img/products/tylo-elektricheskaya-pechcombi-compact-rc4.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "Tylo Combi Compact RC8", brand: "",
    description: "Нагреватель TYLO Combi — изысканный нагреватель, который позволяет наслаждаться в одном помещении и традиционной сауной, и паровой (русская баня) или травяной сауной. Выбор за вами — традиционная сауна при температуре 70-110°С и относительной влажности 5-35% или «русская баня» при 45-б5°С и 40-65% влажности, с постоянным или пульсирующим парообразованием. Вы можете добавить «изюминку» в свой процесс парения с освежающей травяной сауной. В нагревателе имеется устройство для натуральных трав и жидких ароматизаторов. - Выносной пульт управления H2 в комплекте. - Настенная модель - Может работать без камней Размер каменки(ШхГхВ): 46х32х44см",
    specs: "Модель нагревателя | Выходная мощность | Объем сауны | Напряжение | Масса камней | Вес без камней | Контрольная панель в комплекте | Цена, евро\nA | B | C | D | F | \nCompact RC2/4 | 2-4 | 4-6 | 220/380 | 12кг | 14 | H 1 | 400 | 310 | 375 | 245 | 225 | 462\nCombi RC6 | 6.6 | 4-8 | 220/380 | 14кг | 16 | H 2 | 435 | 455 | 405 | 310 | 315 | 1096\nCombi RC8 | 8 | 6-12 | 220/380 | 14кг | 18 | H 2 | 505 | 455 | 405 | 310 | 315 | 1094",
    price: "от 400€", image: "/img/products/tylo-combi-compact-rc8.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "TYLO Печь для сауны Expression Combi", brand: "TYLO",
    description: "Линейка печей от Tylo Expression вывела электрокаменки на совершенно новый уровень. С печами Tylo Expression у вас появилась возможность наслаждаться расслабляющим паром в саунах. Каменки были отмечены наградой на перстижном европейском конкурсе Red Dot Design Awards 2010 за инновационный и эксклюзивный дизайн. Печи отличаются не только интересным внешним видом, но и своими техническими характеристиками. Электрокаменки Tylo Expression имеют два боковых отверстия для равномерного распределения горячего воздуха, специальные резервуары для аромаэссенций, а также двойной внешний кожух. Печь окрашена в черный цвет и устанавливается на полу на ножках, благодаря чему прекрасно впишутся и дополнят любой интерьер. Tylo Expression Combi Печь напольной установки. Мощность 10 кВт. Управление осуществляется пультами: h2 + RB45 (в комплекте). Размеры в мм: 730x500x300",
    specs: "Производитель: TYLO\nОбъем помещения: 18 м3\nОбъем помещения (мин): 10 м3\nСтрана изготовления: Щвеция\n\n\nМинимальный объем сауны, м3 | 10\nМаксимальный объем сауны, м3 | 18\nМасса камней, кг | 20\nМощность, кВт | 10\nРазмеры: ширина, мм | 500\nРазмеры: глубина, мм | 300\nРазмеры: высота, мм | 730\nМасса печи, кг | 20\nНеобходимое напряжение | V220/380\nЦена, евро | 1872",
    price: "", image: "/img/products/tylo-pech-dlya-saunyi-expression-combi.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Электрические печи",
    title: "Tylo Sense Sport 8", brand: "TYLO",
    description: "Электрические каменки Tylo Sport с панелью управления, термостатом и таймером, интегрированным в основание нагревателя. Время работы — 3 часа, таймер включения на 9 часов. Стоимость: 506 евро.",
    specs: "Производитель: TYLO\nМощность, кВт:: 8,0\nОбъем помещения: 12 м3\nОбъем помещения (мин): 6 м3\nМаксимальный вес камней: 12 кг.\nШирина печки мм:: 455\nГлубина печки, мм:: 315\nВысота печки, мм:: 505\nВес печи, кг:: 15\nТип электропитания:: 220 1N~/ 380 3N~\nПульт управления:: Встроенный пульт управления.",
    price: "506€", image: "/img/products/n-a.jpg",
  },

  // ---- Дровяные печи ----
  {
    category_slug: 'sauny', group_title: "Дровяные печи",
    title: "HARVIA Дровяная печь Harvia M", brand: "HARVIA",
    description: "Каменка Harvia M подходит для специально для саун среднего размера. Дизайн печи очень традиционный и классический. Каменка представлена в цвете — черный графит.",
    specs: "Производитель: HARVIA\nОбъем помещения (мин): 4.5 м3\nОбъем помещения: 13 м3\nМаксимальный вес камней: 30 кг\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Вес печи, кг | Ширина, мм | Глубина, мм | Высота, мм | Водяная емкость, л | Диаметр дымохода, мм | Расстояние дымохода от пола, мм | Код | Цена, евро\nHARVIA Дровяная печь WKM11 Harvia M1 | 13 | 45 | 390 | 430 | 710 | нет | 115 | - | ЕНН00895 | 259\nHARVIA Дровяная печь WKM16 Harvia M2 | 13 | 45 | 390 | 430 | 710 | нет | 115 | - | ЕНН05111 | 270\nHARVIA Дровяная печь WKM3 Harvia M3 | 13 | 45 | 390 | 430 | 710 | нет | 115 | - | ЕНН00896 | 273",
    price: "от 259€", image: "/img/products/harvia-drovyanaya-pech-harvia-m.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Дровяные печи",
    title: "HARVIA Дровяная печь Legend SL", brand: "HARVIA",
    description: "Каменка Harvia Legend отличается оригинальным дизайном и большой вместимостью камнями. Благодаря большому отсеку для камней, печь способна быстро протапливать помещение и надолго сохранять тепло. Данная модель представлена с выносной топкой.",
    specs: "Производитель: HARVIA\nОбъем помещения (мин): 5 м3\nОбъем помещения: 30 м3\nМаксимальный вес камней: 260 кг\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Вес печи, кг | Ширина, мм | Глубина, мм | Высота, мм | Водяная емкость, л | Диаметр дымохода, мм | Расстояние дымохода от пола, мм | Код | Цена,евро\nHARVIA Дровяная печь WK150LDSL Legend 150 SL | 13 | 62 | 530 | 530+200 | 740 | нет | 115 | - | ЕНН00914 | 659\nHARVIA Дровяная печь WK240LD Legend 240 DUO | 18 | 95 | 600 | 600+180 | 830 | нет | 115 | - | ЕНН00916 | 956\nHARVIA Дровяная печь WK240LDSL Legend 240 SL | 18 | 82 | 600 | 600+180 | 830 | нет | 115 | - | ЕНН00917 | 806\nHARVIA Дровяная печь WK300LDLUX Legend 300 Duo | 24 | 99 | 600 | 660+120 | 1040 | нет | 115 | - | ЕНН00919 | 1231",
    price: "от 659€", image: "/img/products/harvia-drovyanaya-pech-legend-sl.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Дровяные печи",
    title: "Harvia SL", brand: "HARVIA",
    description: "Модели Harvia SL предназначены специально для того, чтобы вы могли протапливать сауну из другого помещения. Дверца со стеклом позволит вам насладиться видом живого огня во время парения. Каменка имеет регулируемые ножки, что значительно облегчает установку каменки.",
    specs: "Производитель: HARVIA\nОбъем помещения (мин): 4.5 м3\nОбъем помещения: 50 м3\nМаксимальный вес камней: 120 кг.\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Вес печи, кг | Ширина, мм | Глубина, мм | Высота, мм | Водяная емкость, л | Диаметр дымохода, мм | Расстояние дымохода от пола, мм | Код | Цена, евро\nHARVIA Дровяная печь WK200B Harvia 20 бойлер | 18 | 65 | 430 | 510 | 760 | 20 | 115 | - | ЕНН00900 | 564\nHARVIA Дровяная печь WK200BSL Harvia 20 SL бойлер | 18 | 75 | 430 | 510+220 | 760 | 20 | 115 | - | ЕНН00905 | 606\nHARVIA Дровяная печь WK200SL Harvia 20 SL | 18 | 70 | 430 | 510+220 | 760 | нет | 115 | - | ЕНН00903 | 533\nHARVIA Дровяная печь WK500SL Harvia 50 SL | 40 | 175 | 510 | 720+195 | 1050 | нет | 115 | - | ЕНН00911 | 2472\nHARVIA Дровяная печь WKM3SL Harvia M3 SL | 13 | 50 | 390 | 430+220 | 710 | нет | 115 | - | ЕНН00897 | 428\nHARVIA Дровяная печь CLASSIC 220 со стеклянной дверцей | 20 | 49 | 401 | 520 | 730 | нет | 115 | - | ЕНН03910 | 715",
    price: "от 428€", image: "/img/products/harvia-sl.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Дровяные печи",
    title: "Kastor KS-20", brand: "",
    description: "Эта классическая каменка имеет новую лицевую панель из сатиновой стали и стеклянную дверцу новой формы. Эта самая популярная дровяная каменка по своим габаритам и мощности подходит для большинства финских бань.",
    specs: "\nРазмеры(ш, г, в): | 490*510*780mm\nВес камней | 60кг\nМощность | &18кВт\nВес печи | 62кг\nГарантия | 3 года\nЦена, евро | 560",
    price: "", image: "/img/products/kastor-ks-20.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Дровяные печи",
    title: "Kastor KS-27", brand: "",
    description: "Мощная печка со стеклянной дверцей. Большая масса камней гарантирует обилие пара.",
    specs: "\nРазмеры(ш, г, в): | 490*510*920mm\nВес камней: | 65к\nМощность: | 20кВт\nВес печи: | 72кг\nГарантия | 3 года\nЦена, евро | 601",
    price: "", image: "/img/products/kastor-ks-27.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Дровяные печи",
    title: "KASTOR Дровяная печь KSIS", brand: "KASTOR",
    description: "Дровяные печи Kastor KSIS JK изготовлены из наиболее прочных сортов стали, что обеспечивает высокую надежность и качество печей. МоделиKastor KSIS спроектированы таким образом, что повышает пожаробезопасность печи и имеется защита от прогорания. Данная модель предполагает вариант монтажа сквозь стену, что позволяет насладиться преимуществами, как печки, так и камина в смежном помещении. Условные обозначения: VV – бак слева JK – с выносной топкой VP – змеевик <",
    specs: "Производитель: KASTOR\nОбъем помещения (мин): 8 м3\nОбъем помещения: 37 м3\nМаксимальный вес камней: 75 кг\nСтрана изготовления: Финляндия\n\nМодель | Мощность, кВт | Вес печи, кг | Ширина, мм | Глубина, мм | Высота, мм | Водяная емкость, л | Диаметр дымохода, мм | Расстояние дымохода от пола, мм | Код | Цена, евро\nKASTOR Дровяная печь KSIS-20 JK (фронтальная рамка чёрная), артикул 083343 | 18 | 76 | 490 | 490 | 786 | нет | 129 | сверху | ЕНН00047 | 1026\nKASTOR Дровяная печь KSIS-20-TS с боковым выходом дымохода без кожуха, артикул 83341 | 18 | 76 | 490 | 490 | 786 | нет | 129 | сверху | ЕНН04358 | 1015\nKASTOR Дровяная печь KSIS-27 JK (фронтальная рамка из нержавеющей стали) | 20 | 86 | 490 | 490 | 920 | нет | 129 | сверху | ЕНН05496 | 1045\nKASTOR Дровяная печь KSIS-27 JK (фронтальная рамка чёрная), артикул 083360 | 20 | 86 | 490 | 490 | 920 | нет | 129 | сверху | ЕНН00048 | 1045\nKASTOR Дровяная печь KSIS-27-TS с боковым выходом дымохода без кожуха, артикул 83362 | 20 | 86 | 490 | 490 | 920 | нет | 129 | сверху | ЕНН03565 | 1030\nKASTOR Дровяная печь KSIS-37 JK (фронтальная рамка из нержавеющей стали) | 30 | 135 | 580 | 590 | 920 | нет | 129 | сверху | ЕНН00049 | 1350\nKASTOR Дровяная печь KSIS-37-TS JK, с боковым выходом дымохода без кожуха (фронтальная рамка чёрная), артикул 083372 | 30 | 135 | 580 | 590 | 920 | нет | 129 | сверху | ЕНН04177 | 1320",
    price: "от 1015€", image: "/img/products/kastor-drovyanaya-pech-ksis.jpg",
  },

  // ---- Пульты и блоки ----
  {
    category_slug: 'sauny', group_title: "Пульты и блоки",
    title: "Панели управления TYLO CC50", brand: "TYLO",
    description: "На дисплее пульта управления Tylo CC 50 отображаются время и температура, есть выключатель света и функция блокировки панели.",
    specs: "Производитель: TYLO\nРазмер: 130*190*27мм\nПрограммируемое время работы: от 1 до 24 часов\nВремя включения: 0–10 часов",
    price: "21 300 ₽", image: "/img/products/paneli-upravleniya-tylo-cc50.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Пульты и блоки",
    title: "Панели управления Tylo CC20", brand: "TYLO",
    description: "Электронные модели для дистанционного управления сауной. Могут также быть подключены к дистанционному выключателю или центральному компьютеру, или могут включаться/выключаться с помощью телефона. На всех моделях есть энергосберегающая функция управляемой мощности и автоматическая функция про-сушки после «русской бани». Панели управления используются с соответствующим нагревателем, релейным блоком и парогенератором CC 20 Световые диоды показывают температуру, влажность и время от 1 до 10. Время работы — 3 часа, таймер включения — 0-10 часов. Размеры: 100*150*30мм",
    specs: "Производитель: TYLO\nВремя непрерывной работы: 3 часа\nРазмер: 100*150*30мм\nТаймер включения: 0-10 часов",
    price: "15 400 ₽", image: "/img/products/paneli-upravleniya-tylo-cc20.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Пульты и блоки",
    title: "Блок мощности RB30", brand: "TYLO",
    description: "",
    specs: "Производитель: TYLO\nМаксимальная мощность каменки: 16 кВт\nСтрана изготовления: Швеция",
    price: "24 200 ₽", image: "/img/products/blok-moschnosti-rb30.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Пульты и блоки",
    title: "TYLO Контрольная панель Н1", brand: "TYLO",
    description: "",
    specs: "Производитель: TYLO\nМаксимальный показатель дисплея: +110°С\nМаксимальная мощность каменки: 20 кВт\nВремя непрерывной работы: 0 - 23 ч\nВремя задержки включени: 0 - 24 ч\nСтрана изготовления: Швеция",
    price: "24 900 ₽", image: "/img/products/tylo-kontrolnaya-panel-h1-pro.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Пульты и блоки",
    title: "Пульт управления C105S", brand: "HARVIA",
    description: "",
    specs: "Производитель: HARVIA\nНастраиваемая температура: +(40-110) С\nМаксимальный показатель дисплея: +125 С\nМаксимальная мощность каменки: 10.5 кВт\nВремя непрерывной работы: 4 часа\nВремя задержки включени: 0-12 час\nРазмер: 223х250х70 мм",
    price: "21 270 ₽", image: "/img/products/pul.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Пульты и блоки",
    title: "Блок управления C260-34 26-34kW", brand: "HARVIA",
    description: "Пульт управления Harvia C260:",
    specs: "Производитель: HARVIA\nНастраиваемая температура: +(40-110) С\nМаксимальный показатель дисплея: +125 С\nМаксимальная мощность каменки: 34 кВт\nВремя непрерывной работы: 12 час\nВремя задержки включени: 0-12 час\nСтрана изготовления: Финляндия\nРазмер: 223х250х70 мм",
    price: "48 900 ₽", image: "/img/products/blok-upravleniya-c26040034-26-34kw.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Пульты и блоки",
    title: "Пульт управления C150 3-17kW", brand: "HARVIA",
    description: "Пульт управления C150 включается следующие функции:",
    specs: "Производитель: HARVIA\nНастраиваемая температура: +(40-110) С\nМаксимальная мощность каменки: 17 кВт\nВремя непрерывной работы: 12 час\nВремя задержки включени: 0-12 час\nСтрана изготовления: Финляндия\nРазмер: 223х250х70 мм",
    price: "16 550 ₽", image: "/img/products/pult-upravleniya-c150400vkk-3-17kw-s-taymerom.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Пульты и блоки",
    title: "Пульт управления Griffin CG170С", brand: "HARVIA",
    description: "цифровая панель управления управление электрокаменкой Combi управляет сауной и инфракрасной кабиной точная установка температуры до одного градуса управляет температурой, освещением, вентиляцией, временем автоматического включение после сбоя электроэнергии",
    specs: "Производитель: HARVIA\nНастраиваемая температура: +(40-110) С\nМаксимальная мощность каменки: 17 кВт\nВремя задержки включени: 0-12 час\nСтрана изготовления: Финляндия",
    price: "27 320 ₽", image: "/img/products/pult-upravleniya-griffin-cg170s.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Пульты и блоки",
    title: "Пульт управления каменкой Griffin CG170", brand: "HARVIA",
    description: "Пульт управления Griffin CG170:",
    specs: "Производитель: HARVIA\nСтрана изготовления: Финляндия",
    price: "23 480 ₽", image: "/img/products/griffin-cg170.jpg",
  },

  // ---- ИК-кабины ----
  {
    category_slug: 'sauny', group_title: "ИК-кабины",
    title: "HELO ИК кабина HSI 40 H", brand: "HELO",
    description: "Инфракрасная кабина HSI 40 идеально подходит для пяти человек. Благодаря своему дизайну, кабина с легкостью впишется в любой интерьер. имеется подогрев скамеек и пола. что сделает времяпрепровождение в кабине более приятным. Инфракрасные кабины доступны в отделке — хемлок и кедр. Кабина оснащена: • CD плеером; • акустической системой; • оборудованием для цветотерапии.",
    specs: "Производитель: HELO\nВысота: 1950 мм\nШирина: 1520 мм\nДлина: 1820 мм\nМатериал: хемлок\nМощность: 2,2 кВт\nКоличество человек: 4\nСтрана изготовления: Финляндия\nАртикул: ЕНН01452",
    price: "226 500 ₽", image: "/img/products/helo-ik-kabina-hsi-40-h.jpg",
  },
  {
    category_slug: 'sauny', group_title: "ИК-кабины",
    title: "HELO ИК кабина HSI 20 C", brand: "HELO",
    description: "Инфракрасная кабина HSI 20 идеально подходит для помещений небольшого размера. Посещать кабину можно вдвоем. Инфракрасные кабины доступны в хемлоке и красном канадском кедре на выбор.",
    specs: "Производитель: HELO\nВысота: 1950 мм\nШирина: 1120 мм\nДлина: 1220 мм\nМатериал: канадский кедр\nМощность: 1,74 кВт\nКоличество человек: 2\nСтрана изготовления: Финляндия\nАртикул: ЕНН01447",
    price: "216 900 ₽", image: "/img/products/helo-ik-kabina-hsi-20-c.jpg",
  },
  {
    category_slug: 'sauny', group_title: "ИК-кабины",
    title: "Инфракрасная кабина HELO HSI 10H", brand: "HELO",
    description: "Инфракрасная кабина HSI 10 идеально подходит для помещений маленького размера. Посещать кабину вы можете в одиночестве, но зато она с легкостью впишется к вам в квартиру. Инфракрасные кабины доступны в отделке — хемлок и кедр.",
    specs: "Производитель: HELO\nВысота: 1910 мм\nШирина: 1020 мм\nДлина: 920 мм\nМатериал: хемлок\nМощность: 1,4 кВт\nКоличество человек: 1\nСтрана изготовления: Финляндия\nАртикул: ЕНН01446",
    price: "116 800 ₽", image: "/img/products/infrakrasnaya-kabina-helo-hsi-10h.jpg",
  },

  // ---- Двери для саун ----
  {
    category_slug: 'sauny', group_title: "Двери для саун",
    title: "Двери стеклянные SUOVI, AKMA, DOORWOOD", brand: "Andres dekoor",
    description: "Дверь из закаленного стекла разработана для использовании в саунах. Предназначены для помещений с высокой температурой и повышенным уровнем влажности. Цвет стекла разнообразный: серый, бронза, сатин, это позволит вам подобрать дверь именно для вашего интерьера. Размеры: 60х1900, 70х1900, 80х1900, 80х2000.",
    specs: "Производитель: Andres dekoor\nРазмер по коробке, мм (ШхВ): 700*1900700х2000\nЦвет: бронза\nПредназначение: для сауны",
    price: "6 950 ₽", image: "/img/products/dver-steklyannaya-estoniya.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Двери для саун",
    title: "SAWO Дверь для сауны", brand: "",
    description: "",
    specs: "Ширина: 690 мм\nВысота: 1890 мм\nМатериал: кедр, осина\nЦвет: бронза\nПредназначение: для сауны",
    price: "15 500 ₽", image: "/img/products/sawo-dver-730-3sgd-l-bronza.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Двери для саун",
    title: "TYLO Дверь для сауны DGМ-72 190 коробка ель", brand: "TYLO",
    description: "Дверь для сауны DGМ изготовлена из стекла — бронза с коробкой — ель. Дверь выполнена из высококачественных материалов, что гарантирует долгий срок службы.",
    specs: "Производитель: TYLO\nШирина: 710 мм\nВысота: 1850 мм2000 мм\nЦвет: бронза\nПредназначение: для сауны",
    price: "12 950 ₽", image: "/img/products/tylo-dver-dlya-saunyi-dgm.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Двери для саун",
    title: "TYLO Дверь для сауны DGР-72 190 коробка ольха", brand: "TYLO",
    description: "",
    specs: "Производитель: TYLO\nШирина: 710 мм\nВысота: 1850 мм\nЦвет: бронза\nПредназначение: для сауны",
    price: "38 100 ₽", image: "/img/products/tylo-dver-dlya-saunyi-dgr.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Двери для саун",
    title: "Двери стеклянные HARVIA STG для сауны", brand: "HARVIA",
    description: "Модель представлена в следующих размерах: 690 x 1890 мм, 790 x 1890 мм",
    specs: "Производитель: HARVIA\nШирина: 690мм, 790 мм\nВысота: 1890 мм\nЦвет: бронза\nПредназначение: для сауны",
    price: "11 400 ₽", image: "/img/products/harvia-dveri-steklyannyie-bronza-dlya-saunyi.jpg",
  },

  // ---- Освещение ----
  {
    category_slug: 'sauny', group_title: "Освещение",
    title: "Светильник Tylo для сауны 40 Вт", brand: "",
    description: "Монтаж: Настенный Мощность: 40 Вт Источник света: Галогенная лампа Материал корпуса: Стекло Стекло: Матовое Класс защиты: IP55 Длина: 9 см Ширина: 9 см",
    specs: "",
    price: "3 650 ₽", image: "/img/products/svetilnik-tylo-40-vt.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Освещение",
    title: "Световая трубка Tylo для финской сауны 27 Вт 900 мм", brand: "",
    description: "Длина трубки: 900 мм. Мощность трубки: 27 Вт. Световая трубка Tylo для финской сауны рассчитана на освещение мягким светом длинных предметов. Ею можно осветить входные двери, длинные полки, подспинники и перегородки стен. Питание для трубки нужно проводить от трансформатора в 12 В. При необходимости, трубку можно укоротить, отрезав от нее определенное количество модулей. Степень защиты: IP 24.",
    specs: "",
    price: "9 200 ₽", image: "/img/products/svetovaya-trubka-tylo-dlya-finskoy-saunyi-57-vt-1900-mm.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Освещение",
    title: "Комплект с проектором VP15 для подсветки полков", brand: "",
    description: "",
    specs: "",
    price: "32 900 ₽", image: "/img/products/proektor-vp15-dlya-vlazhnyih-pomescheniy.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Освещение",
    title: "Комплект с проектором VP33 для сауны", brand: "",
    description: "Мощность, Вт-42",
    specs: "",
    price: "41 450 ₽", image: "/img/products/proektor-vp33-monohromnyim-diskom-vne-saunyi.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Освещение",
    title: "Комплект «Звездное небо» с проектор с цветовым диском для сауны VP11 С", brand: "",
    description: "Проектор 50 Вт для стеклянного и пластмассового волокна. Проектор не имеет вентилятора и поэтому абсолютно бесшумный. Габариты проектора: Ш:245 x Д:133 x В:135 мм.",
    specs: "",
    price: "36 600 ₽", image: "/img/products/proektor-cariitti-vp11-c.jpg",
  },

  // ---- Стройматериалы ----
  {
    category_slug: 'sauny', group_title: "Стройматериалы",
    title: "Вагонка абаши", brand: "",
    description: "",
    specs: "\nМатериал | абаши | абаши\nРазмеры, толщина, мм | 12 | 12\nРазмеры, ширина, мм | 95 | 95\nРазмеры, длина, мм | от 1000 до 5000 | от 2000 до 2500\nЦена за м2 | 2000 | ",
    price: "3 600 ₽", image: "/img/products/vagonka-abashi.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Стройматериалы",
    title: "Вагонка кедр-Канада", brand: "",
    description: "",
    specs: "\nМатериал | кедр\nРазмеры, толщина, мм | 11\nРазмеры, ширина, мм | 80(90)\nРазмеры, длина, мм | от 0920 до 3960\nЦена за м2 | 2400",
    price: "4 200 ₽", image: "/img/products/vagonka-kedr.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Стройматериалы",
    title: "Вагонка липа-А", brand: "",
    description: "",
    specs: "",
    price: "1 040 ₽", image: "/img/products/vagonka-lipa.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Стройматериалы",
    title: "Вагонка осина", brand: "",
    description: "",
    specs: "\nМатериал | осина | осина | \nРазмеры, толщина, мм | 15 | 12 | \nРазмеры, ширина, мм | 85(80) | 77(70) | \nРазмеры, длина, мм | 1800 | от 1800 до 2200 | \nЦена за м2 | 550 | 650 | ",
    price: "650 ₽", image: "/img/products/vagonka-osina.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Стройматериалы",
    title: "Доска абаши Африка", brand: "",
    description: "",
    specs: "\nМатериал | абаши | абаши | абаши\nРазмеры, толщина, мм | 19 | 27 | 27\nРазмеры, ширина, мм | 90 | 95 | 95\nРазмеры, длина, мм | от 1800 до 4400 | от 1800 до 5000 | от 1800 до 2600\nЦена за м.п. | 220 | 220 | 180",
    price: "340 ₽", image: "/img/products/doska-abashi-afrika.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Стройматериалы",
    title: "Доска кедр-Канада", brand: "",
    description: "",
    specs: "\nМатериал | кедр\nРазмеры, толщина, мм | 26\nРазмеры, ширина, мм | 90\nРазмеры, длина, мм | от 0920 до 3000\nЦена за м.п. | 360",
    price: "620 ₽", image: "/img/products/doska-kedr.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Стройматериалы",
    title: "Доска осина", brand: "",
    description: "",
    specs: "\nМатериал | осина\nРазмеры, толщина, мм | 12\nРазмеры, ширина, мм | 77 (70)\nРазмеры, длина, мм | от 1890 до 2200\nЦена за м.п. | 120",
    price: "120 ₽", image: "/img/products/doska-osina.jpg",
  },
  {
    category_slug: 'sauny', group_title: "Стройматериалы",
    title: "Доска липа-А", brand: "",
    description: "",
    specs: "\nМатериал | липа\nРазмеры, толщина, мм | 26\nРазмеры, ширина, мм | 92\nРазмеры, длина, мм | от 1800 до 3000\nЦена за м.п. | 150",
    price: "150 ₽", image: "/img/products/doska-lipa.jpg",
  },

  // ---- Парогенераторы ----
  {
    category_slug: 'turetskie-bani', group_title: "Парогенераторы",
    title: "Парогенератор HARVIA с контрольной панелью HGХ", brand: "HARVIA",
    description: "Парогенератор Harvia Steam легок в установке. Имеются модели HGХ45, HGХ60, HGХ90 и HGХ11.Управляется парогенератор Harvia Steam отдельным пультом управления.",
    specs: "Производитель: HARVIA\nОбъем помещения: 17 м3\nОбъем помещения(мин): 6 м3\nСтрана изготовления: Финляндия\n\nМодель | Максимальная мощность, кВт | Глубина, мм | Высота, мм | Ширина, мм | Выпуск пара, кг/ч | Код | Цена, евро\nHARVIA Парогенератор с контрольной панелью HGХ11 | 10,8 | 196 | 411 | 520 | 14,6 | ЕНН00924 | 1039\nHARVIA Парогенератор с контрольной панелью HGХ45 | 4,5 | 196 | 411 | 520 | 5,5 | ЕНН00921 | 885\nHARVIA Парогенератор с контрольной панелью HGХ60 | 5,7 | 196 | 411 | 520 | 7,6 | ЕНН00922 | 929\nHARVIA Парогенератор с контрольной панелью HGХ90 | 9 | 196 | 411 | 520 | 12 | ЕНН00923 | 1005",
    price: "от 885€", image: "/img/products/parogenerator-s-kontrolnoy-panelyu-griffin-hgs.jpg",
  },
  {
    category_slug: 'turetskie-bani', group_title: "Парогенераторы",
    title: "Парогенераторы HELO HSX и HNS без пульта управления", brand: "",
    description: "",
    specs: "Модель | Размеры | Мощность, кВт | Объем помещения | Цена, евро\nПарогенератор HNS 77 | 380х520х160 | 7.7 | 7.0-10.0 | 1282\nПарогенератор HSX 60 | 380х520х160 | 6 | 5.0-7.0 | 985\nПарогенератор HSX 7,7 | 380х520х160 | 7.7 | 7.0-10.0 | 1062\nПарогенератор HNS 90 | 380х520х160 | 9 | 10.0-12.0 | 1370\nПарогенератор HNS 120 | 380х520х160 | 12 | 12.0-15.0 | 1418\nПарогенератор HNS 140 | 380х520х160 | 14 | 15.0-18.0 | 1458",
    price: "от 985€", image: "/img/products/parogeneratoryi-dlya-spa-helo-hsx.jpg",
  },

  // ---- Двери для турецких парных ----
  {
    category_slug: 'turetskie-bani', group_title: "Двери для турецких парных",
    title: "Дверь SUOVI для турeцкой парной", brand: "ANDRES",
    description: "",
    specs: "Производитель: ANDRES\nРазмер по коробке: 690*1890\nЦвет: бронза, серая, сатин\nМатериал: алюминий\nПредназначение: для парных\nОткрывание: ЛевоеПравое",
    price: "12 900 ₽", image: "/img/products/dver-anders-dlya-turetskoy-parnoy.jpg",
  },
  {
    category_slug: 'turetskie-bani', group_title: "Двери для турецких парных",
    title: "SAWO Дверь для турецкой парной", brand: "SAWO",
    description: "",
    specs: "Производитель: SAWO\nРазмер по коробке: 785*1850 мм\nЦвет: дымчатый сатин\nМатериал: алюминий\nПредназначение: для парных\nОткрывание: ЛевоеПравое",
    price: "22 300 ₽", image: "/img/products/sawo-dver-740-l-korobka-alyuminiy-785mm-x-1850-mm.jpg",
  },
  {
    category_slug: 'turetskie-bani', group_title: "Двери для турецких парных",
    title: "AKMA Дверь для турецкой парной", brand: "ANDRES",
    description: "",
    specs: "Производитель: ANDRES\nРазмер по коробке: 690*1890\nЦвет: тонированное стеклобронза\nМатериал: алюминий\nПредназначение: для парных\nОткрывание: ЛевоеПравое",
    price: "16 800 ₽", image: "/img/products/tylo-dver-dlya-turetskoy-parnoy.jpg",
  },

  // ---- Дополнительное оборудование ----
  {
    category_slug: 'turetskie-bani', group_title: "Дополнительное оборудование",
    title: "Паровая форсунка для парогенераторов Sawo", brand: "",
    description: "",
    specs: "",
    price: "2 650 ₽", image: "/img/products/parovaya-forsunka-dlya-parogeneratorov-sawo.jpg",
  },
  {
    category_slug: 'turetskie-bani', group_title: "Дополнительное оборудование",
    title: "Система ароматизации для парогенератора", brand: "",
    description: "Насос-дозатор является устройством подачи ароматизатора в турецкую парную. Это устройство приобретается дополнительно и подойдет для любого парогенератора.",
    specs: "",
    price: "12 800 ₽", image: "/img/products/nasos-dozator-aromata-sawo-stp-pump.jpg",
  },
  {
    category_slug: 'turetskie-bani', group_title: "Дополнительное оборудование",
    title: "Паровая форсунка TYLO", brand: "",
    description: "",
    specs: "",
    price: "3 600 ₽", image: "/img/products/parovaya-forsunka-tylo.jpg",
  },
  {
    category_slug: 'turetskie-bani', group_title: "Дополнительное оборудование",
    title: "Светильник для турецкой бани TYLO Н100", brand: "",
    description: "Светильник TYLO Steam Н100 идеально подходит для турецкой бани. Создает приглушенный свет и особую приятную атмосферу. Имеет влагозащитный нержавеющий корпус. Светильники TYLO Steam Н100 для парной обладают высоким качеством и не пропускают воду, состоят из стеклянного колпака и фарфорового цоколя, крепятся на стену",
    specs: "",
    price: "4 520 ₽", image: "/img/products/svetilnik-dlya-turetskoy-bani-tylo-v.jpg",
  },
  {
    category_slug: 'turetskie-bani', group_title: "Дополнительное оборудование",
    title: "Светильник Tylo Е28 350мм 0,8 W", brand: "",
    description: "Мощность: 0,8 Вт Напряжение: 12 В Длина: 350 мм",
    specs: "",
    price: "4 960 ₽", image: "/img/products/sistema-podsvetki-tylo-rf-12v-5-w.jpg",
  },

];

module.exports = { products };
