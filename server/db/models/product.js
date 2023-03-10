const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ SubCategory, Shop, User }) {
      Product.belongsTo(SubCategory, { foreignKey: "subcategoryId" });
      Product.belongsTo(Shop, { foreignKey: "shopId" });
      Product.belongsTo(User, { foreignKey: "userId" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.TEXT,
      number: DataTypes.INTEGER,
      unit: DataTypes.TEXT,
      subcategoryId: DataTypes.INTEGER,
      delivered: DataTypes.BOOLEAN,
      shopId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      hidden: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
