const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
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
  Product.updateMany = async function (products) {
    products.forEach(async (product) => {
      await this.update(
        { ...(await this.findByPk(product.id)), ...product },
        { where: { id: product.id } }
      );
    });
    return products.reduce((acc, product) => {
      acc.push(product.id);
      return acc;
    }, []);
  };

  Product.deleteMany = async function (productsId) {
    const ids = [];
    productsId.forEach(async (id) => {
      ids.push(id);
      await Product.destroy({ where: { id } });
    });
    return ids;
  };

  return Product;
};
