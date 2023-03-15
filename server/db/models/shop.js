const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate({ User, Product, ShoppingCart }) {
      Shop.belongsTo(User, { foreignKey: "userId" });
      Shop.hasMany(Product, { foreignKey: "shopId" });
      Shop.hasMany(ShoppingCart, { foreignKey: "shopId" });
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
      urlName: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Shop",
    }
  );
  return Shop;
};
