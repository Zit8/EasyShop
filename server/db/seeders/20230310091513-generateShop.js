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
