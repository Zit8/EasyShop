/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        // 1
        {
          name: "Книги",
          userId: 1,
        },
        // 2
        {
          name: "Компьютеры и электроника",
          userId: 1,
        },
        // 3
        {
          name: "Дом и сад",
          userId: 1,
        },
        // 4
        {
          name: "Красота и здоровье",
          userId: 1,
        },
        // 5
        {
          name: "Детский мир",
          userId: 1,
        },
        // 6
        {
          name: "Спорт и отдых",
          userId: 1,
        },
        // 7
        {
          name: "Авто и мото",
          userId: 1,
        },
        // 8
        {
          name: "Товары для животных",
          userId: 1,
        },
        // 9
        {
          name: "Продукты питания",
          userId: 1,
        },
        // 10
        {
          name: "Канцтовары и офисные принадлежности",
          userId: 1,
        },
        // 11
        {
          name: "Ювелирные изделия и часы",
          userId: 1,
        },
        // 12
        {
          name: "Товары для творчества и рукоделия",
          userId: 1,
        },
        // 13
        {
          name: "Музыка",
          userId: 1,
        },
        // 15
        {
          name: "Цифровые товары",
          userId: 1,
        },
        // 16
        {
          name: "Бытовая химия и гигиена",
          userId: 1,
        },
        // 17
        {
          name: "Электронные сигареты и товары для курения",
          userId: 1,
        },
        // 18
        {
          name: "Кафе, рестораны",
          userId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
