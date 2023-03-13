const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ShoppingCartItem extends Model {
    static associate({ ShoppingCart, Product }) {
      ShoppingCartItem.belongsTo(ShoppingCart, {
        foreignKey: "shoppingCartId",
      });
      ShoppingCartItem.belongsTo(Product, { foreignKey: "productId" });
    }
  }
  ShoppingCartItem.init(
    {
      shoppingCartId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ShoppingCartItem",
    }
  );
  return ShoppingCartItem;
};
