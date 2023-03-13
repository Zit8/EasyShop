const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ShoppingCartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ShoppingCard, User, Product, Shop }) {
      ShoppingCartItem.belongsTo(ShoppingCard, {
        foreignKey: "shoppingCardId",
      });
      ShoppingCartItem.belongsTo(User, { foreignKey: "userId" });
      ShoppingCartItem.belongsTo(Product, { foreignKey: "productId" });
      ShoppingCartItem.belongsTo(Shop, { foreignKey: "shopId" });
    }
  }
  ShoppingCartItem.init(
    {
      shoppingCartId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      shopId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ShoppingCartItem",
    }
  );
  return ShoppingCartItem;
};
