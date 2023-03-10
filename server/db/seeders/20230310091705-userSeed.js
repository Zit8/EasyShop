/** @type {import('sequelize-cli').Migration} */
const axios = require("axios");
const bcrypt = require("bcrypt");

const getUsers = async () => {
  const users = await axios("https://jsonplaceholder.typicode.com/users");
  console.log(users.data);
  return users.data.reduce((acc, user) => {
    acc.push({
      name: user.name,
      email: user.email,
      passwordHash: "123"
    });
    return acc;
  }, []);
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", await getUsers(), {});
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
