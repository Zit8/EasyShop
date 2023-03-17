/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Apple AirPods",
          description:
            "(2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless…",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/61Zh467pKjL._AC_UL675_SR675,480_.jpg",
          number: 111,
          unit: "dr",
          subcategoryId: 1,
          delivered: false,
          shopId: 3,
          userId: 1,
          hidden: false,
          price: 94,
        },
        {
          name: "Apple AirPods Po",
          description:
            "(2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless…",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/61f1YfTkTDL._AC_UL675_SR675,480_.jpg",
          number: 45,
          unit: "dr",
          subcategoryId: 1,
          delivered: false,
          shopId: 3,
          userId: 1,
          hidden: false,
          price: 194,
        },
        {
          name: "Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Silver",
          description:
            "(2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless…",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/61PnHlc0HCL._AC_UL675_SR675,480_.jpg",
          number: 89,
          unit: "ty",
          subcategoryId: 1,
          delivered: false,
          shopId: 3,
          userId: 1,
          hidden: false,
          price: 229,
        },
        {
          name: "Amazon Halo View fitness tracker",
          description:
            "(2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless…",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51u6VxGdpHL._AC_UL675_SR675,480_.jpg",
          number: 111,
          unit: "dr",
          subcategoryId: 1,
          delivered: false,
          shopId: 3,
          userId: 1,
          hidden: false,
          price: 79,
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
