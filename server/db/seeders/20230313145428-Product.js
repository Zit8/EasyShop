/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Уточка",
          description: "Бенто торт",
          image:
            "https://ltdfoto.ru/images/2023/03/17/SNIMOK-EKRANA-2023-03-17-V-15.17.22.png",
          number: 10,
          unit: "кг",
          subcategoryId: 137,
          delivered: false,
          shopId: 1,
          userId: 1,
          hidden: false,
          price: 800,
        },
        {
          name: "Work",
          description: "Бенто торт",
          image: "https://ltdfoto.ru/images/2023/03/17/SNIMOK-EKRANA-2023-03-17-V-15.18.03.png",
          number: 10,
          unit: "кг",
          subcategoryId: 137,
          delivered: false,
          shopId: 1,
          userId: 1,
          hidden: false,
          price: 800,
        },
        {
          name: "Попкорн",
          description: "Торт",
          image:
            "https://ltdfoto.ru/images/2023/03/17/SNIMOK-EKRANA-2023-03-17-V-15.19.01.md.png",
          number: 10,
          unit: "кг",
          subcategoryId: 121,
          delivered: false,
          shopId: 1,
          userId: 1,
          hidden: false,
          price: 1500,
        },
        {
          name: "Дино",
          description: "Торт",
          image:
            "https://ltdfoto.ru/images/2023/03/17/SNIMOK-EKRANA-2023-03-17-V-15.20.18.md.png",
          number: 10,
          unit: "кг",
          subcategoryId: 121,
          delivered: false,
          shopId: 1,
          userId: 1,
          hidden: false,
          price: 1500,
        },
        {
          name: "Ягодицы",
          description: "Торт",
          image:
            "https://ltdfoto.ru/images/2023/03/17/SNIMOK-EKRANA-2023-03-17-V-15.16.46.png",
          number: 10,
          unit: "кг",
          subcategoryId: 137,
          delivered: false,
          shopId: 1,
          userId: 1,
          hidden: false,
          price: 800,
        },
        {
          name: "Бокс 1",
          description: "Торт",
          image:
            "https://ltdfoto.ru/images/2023/03/17/SNIMOK-EKRANA-2023-03-17-V-15.15.30.md.png",
          number: 10,
          unit: "кг",
          subcategoryId: 143,
          delivered: false,
          shopId: 1,
          userId: 1,
          hidden: false,
          price: 1200,
        },
        {
          name: "Бокс 2",
          description: "Торт",
          image:
            "https://ltdfoto.ru/images/2023/03/17/SNIMOK-EKRANA-2023-03-17-V-15.15.52.png",
          number: 10,
          unit: "кг",
          subcategoryId: 143,
          delivered: false,
          shopId: 1,
          userId: 1,
          hidden: false,
          price: 1200,
        },

        // бенто 137
        // эклеры 123
        // макарунс 128
        // торты 121
        // пирожные 122
        // комбо 143
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
