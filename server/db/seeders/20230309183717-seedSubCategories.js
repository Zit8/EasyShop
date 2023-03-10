/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "SubCategories",
      [
        // Книги
        {
          name: "Художественная литература",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Детективы и триллеры",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Фантастика и фэнтези",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Романы",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Классика",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Поэзия и драматургия",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Детская литература",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Бизнес-литература",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Компьютеры и интернет",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Дом и семья",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Здоровье и медицина",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Психология и саморазвитие",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Религия и духовность",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Искусство и культура",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Путешествия и география",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Естественные науки",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Техническая литература",
          categoryId: 1,
          userId: 1,
        },
        {
          name: "Справочная литература",
          categoryId: 1,
          userId: 1,
        },
        // Компьютеры и электроника
        {
          name: "Ноутбуки",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Компьютеры и моноблоки",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Планшеты и электронные книги",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Смартфоны и аксессуары",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Фото и видео",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Телевизоры и медиа",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Аудио и Hi-Fi",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Игры и развлечения",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Комплектующие и периферия",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Сетевое оборудование",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Бытовая техника",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Климатическое оборудование",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Аксессуары для компьютеров и электроники",
          categoryId: 2,
          userId: 1,
        },
        {
          name: "Наушники",
          categoryId: 2,
          userId: 1,
        },
        // Дом и сад
        {
          name: "Мебель",
          categoryId: 3,
          userId: 1,
        },
        {
          name: "Сантехника и ремонт",
          categoryId: 3,
          userId: 1,
        },
        {
          name: "Освещение",
          categoryId: 3,
          userId: 1,
        },
        {
          name: "Текстиль и предметы интерьера",
          categoryId: 3,
          userId: 1,
        },
        {
          name: "Декор и подарки",
          categoryId: 3,
          userId: 1,
        },
        {
          name: "Кухонная утварь и посуда",
          categoryId: 3,
          userId: 1,
        },
        {
          name: "Садовая техника и инструменты",
          categoryId: 3,
          userId: 1,
        },
        {
          name: "Садовый инвентарь и уход",
          categoryId: 3,
          userId: 1,
        },
        {
          name: "Барбекю и аксессуары",
          categoryId: 3,
          userId: 1,
        },
        // Красота и здоровье
        {
          name: "Парфюмерия и косметика",
          categoryId: 4,
          userId: 1,
        },
        {
          name: "Уход за волосами",
          categoryId: 4,
          userId: 1,
        },
        {
          name: "Уход за кожей лица",
          categoryId: 4,
          userId: 1,
        },
        {
          name: "Уход за телом",
          categoryId: 4,
          userId: 1,
        },
        {
          name: "Макияж и аксессуары",
          categoryId: 4,
          userId: 1,
        },
        {
          name: "Поддержание здоровья",
          categoryId: 4,
          userId: 1,
        },
        {
          name: "Массаж и SPA",
          categoryId: 4,
          userId: 1,
        },
        // Детский мир
        {
          name: "Игрушки",
          categoryId: 5,
          userId: 1,
        },
        {
          name: "Коляски и автокресла",
          categoryId: 5,
          userId: 1,
        },
        {
          name: "Товары для новорожденных",
          categoryId: 5,
          userId: 1,
        },
        {
          name: "Кормление и уход",
          categoryId: 5,
          userId: 1,
        },
        {
          name: "Одежда и обувь для детей",
          categoryId: 5,
          userId: 1,
        },
        {
          name: "Развивающие игры и книги",
          categoryId: 5,
          userId: 1,
        },
        {
          name: "Детские сувениры",
          categoryId: 5,
          userId: 1,
        },
        // Спорт и отдых
        {
          name: "Тренажеры и фитнес-оборудование",
          categoryId: 6,
          userId: 1,
        },
        {
          name: "Спортивная одежда и обувь",
          categoryId: 6,
          userId: 1,
        },
        {
          name: "Снаряжение для спорта и активного отдыха",
          categoryId: 6,
          userId: 1,
        },
        {
          name: "Туризм и походы",
          categoryId: 6,
          userId: 1,
        },
        {
          name: "Велоспорт",
          categoryId: 6,
          userId: 1,
        },
        // Авто и мото
        {
          name: "Шины",
          categoryId: 7,
          userId: 1,
        },
        {
          name: "Диски",
          categoryId: 7,
          userId: 1,
        },
        {
          name: "Автоэлектроника и аксессуары",
          categoryId: 7,
          userId: 1,
        },
        {
          name: "Шлема и аксессуары",
          categoryId: 7,
          userId: 1,
        },
        {
          name: "Защита",
          categoryId: 7,
          userId: 1,
        },
        {
          name: "Мотоботы",
          categoryId: 7,
          userId: 1,
        },
        {
          name: "Запчасти и автоаксессуары",
          categoryId: 7,
          userId: 1,
        },
        {
          name: "Автомобильные инструменты",
          categoryId: 7,
          userId: 1,
        },
        // Товары для животных
        {
          name: "Корм для животных",
          categoryId: 8,
          userId: 1,
        },
        {
          name: "Товары для ухода за животными",
          categoryId: 8,
          userId: 1,
        },
        {
          name: "Игрушки для животных",
          categoryId: 8,
          userId: 1,
        },
        {
          name: "Аксессуары для животных",
          categoryId: 8,
          userId: 1,
        },
        // Продукты питания
        {
          name: "Мясо и мясные изделия",
          categoryId: 9,
          userId: 1,
        },
        {
          name: "Рыба и морепродукты",
          categoryId: 9,
          userId: 1,
        },
        {
          name: "Молочные продукты и яйца",
          categoryId: 9,
          userId: 1,
        },
        {
          name: "Овощи и фрукты",
          categoryId: 9,
          userId: 1,
        },
        {
          name: "Хлеб и выпечка",
          categoryId: 9,
          userId: 1,
        },
        {
          name: "Кондитерские изделия",
          categoryId: 9,
          userId: 1,
        },
        {
          name: "Кофе, чай и напитки",
          categoryId: 9,
          userId: 1,
        },
        {
          name: "Готовые блюда и полуфабрикаты",
          categoryId: 9,
          userId: 1,
        },
        // Канцтовары и офисные принадлежности
        {
          name: "Бумага и тетради",
          categoryId: 10,
          userId: 1,
        },
        {
          name: "Письменные принадлежности",
          categoryId: 10,
          userId: 1,
        },
        {
          name: "Канцелярские принадлежности",
          categoryId: 10,
          userId: 1,
        },
        {
          name: "Мебель и аксессуары для офиса",
          categoryId: 10,
          userId: 1,
        },
        {
          name: "Компьютерные аксессуары для офиса",
          categoryId: 10,
          userId: 1,
        },
        {
          name: "Учебные пособия и литература",
          categoryId: 10,
          userId: 1,
        },
        // Ювелирные изделия и часы
        {
          name: "Серьги",
          categoryId: 11,
          userId: 1,
        },
        {
          name: "Кольца",
          categoryId: 11,
          userId: 1,
        },
        {
          name: "Подвески",
          categoryId: 11,
          userId: 1,
        },
        {
          name: "Пирсинг",
          categoryId: 11,
          userId: 1,
        },
        {
          name: "Браслеты",
          categoryId: 11,
          userId: 1,
        },
        {
          name: "Броши",
          categoryId: 11,
          userId: 1,
        },
        {
          name: "Часы механические",
          categoryId: 11,
          userId: 1,
        },
        {
          name: "Часы электронные",
          categoryId: 11,
          userId: 1,
        },
        {
          name: "Смарт-часы",
          categoryId: 11,
          userId: 1,
        },
        {
          name: "Ремешки",
          categoryId: 11,
          userId: 1,
        },
        {
          name: "Фурнитура",
          categoryId: 11,
          userId: 1,
        },
        // Товары для творчества и рукоделия
        {
          name: "Пряжа",
          categoryId: 12,
          userId: 1,
        },
        {
          name: "Нити",
          categoryId: 12,
          userId: 1,
        },
        {
          name: "Бисер",
          categoryId: 12,
          userId: 1,
        },
        {
          name: "Холсты",
          categoryId: 12,
          userId: 1,
        },
        {
          name: "Ткани",
          categoryId: 12,
          userId: 1,
        },
        {
          name: "Кисти",
          categoryId: 12,
          userId: 1,
        },
        {
          name: "Карандаши",
          categoryId: 12,
          userId: 1,
        },
        {
          name: "Маркеры",
          categoryId: 12,
          userId: 1,
        },
        // Музыка
        {
          name: "CD и виниловые пластинки",
          categoryId: 13,
          userId: 1,
        },
        {
          name: "Музыкальные инструменты",
          categoryId: 13,
          userId: 1,
        },
        {
          name: "Аудио-техника",
          categoryId: 13,
          userId: 1,
        },
        // Кафе и рестораны
        {
          name: "Завтраки",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Салаты",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Закуски",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Супы",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Основные блюда",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Десерты",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Напитки",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Кофе",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Чай",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Соки",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Коктейли",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Алкогольные напитки",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Торты",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Пирожные",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Эклеры",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Профитроли",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Картошки",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Мини-пирожные",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Кейк-попсы",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Макарунс",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Кексы",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Куличи",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Печенье и пряники",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Панакотта",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Чизкейк",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Тирамису",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Мусс",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Шоколад ручной работы",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Бенто торты",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Шоколадные конфеты",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Фреш",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Коктейли на основе молока и мороженого",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Мороженное",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Моти",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Комбо-наборы",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Суши",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Роллы",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Сашими",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Wok",
          categoryId: 14,
          userId: 1,
        },
        {
          name: "Пицца",
          categoryId: 14,
          userId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("SubCategories", null, {});
  },
};
