const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ SubCategory, Shop, User, ShoppingCartItem }) {
      Product.belongsTo(SubCategory, { foreignKey: "subcategoryId" });
      Product.belongsTo(Shop, { foreignKey: "shopId" });
      Product.belongsTo(User, { foreignKey: "userId" });
      Product.hasMany(ShoppingCartItem, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.TEXT,
      number: DataTypes.INTEGER,
      orderCount: DataTypes.INTEGER,
      unit: DataTypes.TEXT,
      subcategoryId: DataTypes.INTEGER,
      delivered: DataTypes.BOOLEAN,
      shopId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      hidden: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      weightUnit: DataTypes.TEXT,
      currency: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  Product.updateMany = async function (ids, data) {
    await Product.update(data, { where: { id: ids } });
    return ids;
  };

  Product.deleteMany = async function (productsId) {
    const ids = [];
    productsId.forEach(async (id) => {
      ids.push(id);
      const i = await Product.destroy({ where: { id } });
      console.log(i, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    });
    console.log(ids);
    return ids;
  };

  return Product;
};
