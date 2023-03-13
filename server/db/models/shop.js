const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product, ShoppingCard }) {
      Shop.belongsTo(User, { foreignKey: "userId" });
      Shop.hasMany(Product, { foreignKey: "shopId" });
      Shop.hasMany(ShoppingCard, { foreignKey: "shopId" });
    }
  }
  Shop.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      logo: DataTypes.TEXT,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      startTime: DataTypes.STRING,
      finishingTime: DataTypes.STRING,
      weekdays: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      ratingLink: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Shop",
    }
  );
  return Shop;
};
