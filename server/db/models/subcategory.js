const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
  return SubCategory;
};
