/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.TEXT,
      },
      number: {
        type: Sequelize.INTEGER,
      },
      orderCount: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      unit: {
        type: Sequelize.TEXT,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      weightUnit: {
        type: Sequelize.TEXT,
      },
      currency: {
        type: Sequelize.TEXT,
        defaultValue: "₽",
        allowNull: false,
      },
      subcategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "SubCategories",
          },
          key: "id",
        },
      },
      delivered: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      shopId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Shops",
          },
          key: "id",
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
      },
      hidden: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
