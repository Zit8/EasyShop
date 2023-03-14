/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Shops",
      [
        {
          name: "123",
          description: "123",
          logo: "123",
          city: "123",
          address: "123",
          phone: "123",
          email: "123",
          startTime: "123",
          finishingTime: "123",
          weekdays: "123",
          userId: 1,
        },
        {
          name: "OZON",
          description: "Ozon Fresh (formerly Ozon Express) is an express delivery service for fresh products, groceries and everyday items. Currently available in 9 cities in Russia and growing, Ozon Fresh offers delivery time up to 60 minutes on an assortment of more than 25,000 products.",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wE9UJeQ6OgljvnGHN0frOAfupr77MvUhtA&usqp=CAU",
          city: "Moccow",
          address: "123112, Москва, Пресненская наб., д. 10, блок С, комплекс «Башня на набережной»",
          phone: "89675453423",
          email: "ozon@mail.com",
          startTime: "08:00",
          finishingTime: "22:22",
          weekdays: "sunday",
          userId: 1,
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
