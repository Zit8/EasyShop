const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Shop, Category, SubCategory, Product, ShoppingCart }) {
      User.hasMany(Shop, { foreignKey: "userId" });
      User.hasMany(Category, { foreignKey: "userId" });
      User.hasMany(SubCategory, { foreignKey: "userId" });
      User.hasMany(Product, { foreignKey: "userId" });
      User.hasMany(ShoppingCart, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordHash: DataTypes.STRING,
      role: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
