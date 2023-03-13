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

  Category.updateMany = async function (categories) {
    categories.forEach(async (category) => {
      await this.update(
        { ...(await this.findByPk(category.id)), ...category },
        { where: { id: category.id } }
      );
    });
    return categories.reduce((acc, category) => {
      acc.push(category.id);
      return acc;
    }, []);
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
