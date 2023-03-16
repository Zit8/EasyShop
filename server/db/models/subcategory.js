const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    static associate({ Category, User, Product }) {
      SubCategory.belongsTo(Category, { foreignKey: "categoryId" });
      SubCategory.belongsTo(User, { foreignKey: "userId" });
      SubCategory.hasMany(Product, { foreignKey: "subcategoryId" });
    }
  }
  SubCategory.init(
    {
      name: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SubCategory",
    }
  );

    SubCategory.deleteMany = async function (subCategoriesId) {
      const ids = [];
      subCategoriesId.forEach(async (id) => {
        ids.push(id);
        await SubCategory.destroy({ where: { id } });
      });
      return ids;
    };
  return SubCategory;
};
