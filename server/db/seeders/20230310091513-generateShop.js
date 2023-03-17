/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Shops",
      [
        {
          name: "BB LOVE CAKE",
          description: "Эт мой магаз",
          logo: "",
          city: "Москва",
          address: "3-й Нижнелихоборский пр-д, 3с6",
          phone: "+7(926)191-87-00",
          email: "v.kaledinceff@gmail.com",
          startTime: "08:00",
          finishingTime: "21:00",
          weekdays: "ежедневно",
          userId: 1,
          urlName: "bblovecake",
          ratingLink:
            '<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/bb_love_cake/54959672717/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Bb love cake</a><a href="https://yandex.ru/maps/213/moscow/category/confectionary/184108017/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Кондитерская в Москве</a><a href="https://yandex.ru/maps/213/moscow/category/cake_orders/184108275/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Торты на заказ в Москве</a><iframe src="https://yandex.ru/map-widget/v1/org/bb_love_cake/54959672717/?ll=37.564820%2C55.846425&z=14" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>',
        },
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
