const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ShoppingCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Shop, ShoppingCartItem }) {
      ShoppingCard.belongsTo(User, { foreignKey: "userId" });
      ShoppingCard.belongsTo(Shop, { foreignKey: "shopId" });
      ShoppingCard.hasMany(ShoppingCartItem, { foreignKey: "shoppingCardId" });
    }
  }
  ShoppingCard.init(
    {
      userId: DataTypes.INTEGER,
      shopId: DataTypes.INTEGER,
      deliveryAddress: DataTypes.TEXT,
      selfDelivery: DataTypes.BOOLEAN,
      deliveryDate: DataTypes.TEXT,
      deliveryTime: DataTypes.TEXT,
      paymentStatus: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ShoppingCard",
    }
  );
  return ShoppingCard;
};
