const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    static associate({ User, Shop, ShoppingCartItem }) {
      ShoppingCart.belongsTo(User, { foreignKey: "userId" });
      ShoppingCart.belongsTo(Shop, { foreignKey: "shopId" });
      ShoppingCart.hasMany(ShoppingCartItem, { foreignKey: "shoppingCartId" });
    }
  }
  ShoppingCart.init(
    {
      userId: DataTypes.INTEGER,
      shopId: DataTypes.INTEGER,
      deliveryAddress: DataTypes.TEXT,
      selfDelivery: DataTypes.BOOLEAN,
      deliveryDate: DataTypes.TEXT,
      deliveryTime: DataTypes.TEXT,
      paymentStatus: DataTypes.BOOLEAN,
      paymentWay: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ShoppingCart",
    }
  );
  return ShoppingCart;
};
