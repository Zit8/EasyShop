const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ShoppingCartItem extends Model {
    static associate({ ShoppingCard, Product }) {
      ShoppingCartItem.belongsTo(ShoppingCard, {
        foreignKey: "shoppingCardId",
      });
      ShoppingCartItem.belongsTo(Product, { foreignKey: "productId" });
    }
  }
  ShoppingCartItem.init(
    {
      shoppingCardId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      shopId: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ShoppingCartItem",
    }
  );
  return ShoppingCartItem;
};
