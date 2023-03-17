const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ User, SubCategory }) {
      Category.belongsTo(User, { foreignKey: "userId" });
      Category.hasMany(SubCategory, { foreignKey: "categoryId" });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  Category.updateMany = async function (ids, data) {
    await Category.update(data, { where: { id: ids } });
    return ids;
  };

  Category.deleteMany = async function (categoriesId) {
    const ids = [];
    categoriesId.forEach(async (id) => {
      ids.push(id);
      await Category.destroy({ where: { id } });
    });
    return ids;
  };

  return Category;
};
