const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ShoppingCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, User, Shop }) {
      ShoppingCard.belongsTo(Product, { foreignKey: "productId" });
      ShoppingCard.belongsTo(User, { foreignKey: "userId" });
      ShoppingCard.belongsTo(Shop, { foreignKey: "shopId" });
    }
  }
  ShoppingCard.init(
    {
      productId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      shopId: DataTypes.INTEGER,
      deliveryAddress: DataTypes.TEXT,
      selfDelivery: DataTypes.BOOLEAN,
      deliveryDate: DataTypes.TEXT,
      deliveryTime: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ShoppingCard",
    }
  );
  return ShoppingCard;
};
