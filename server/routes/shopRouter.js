const express = require("express");
const { Shop, Product, SubCategory, Category } = require("../db/models");

const shopRouter = express.Router();

shopRouter.route("/:name").get(async (req, res) => {
  try {
    const oneShop = await Shop.findOne({ where: { name: req.params.name } });
    console.log(oneShop, "===========");

    return res.json(oneShop.dataValues);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

shopRouter.route("/:name/products").get(async (req, res) => {
  try {
    const shop = await Shop.findOne({ where: { name: req.params.name } });
    const allShopProducts = await Product.findAll({
      order: [["createdAt", "DESC"]],
      where: {
        shopId: shop.dataValues.id,
      },
      include: [
        {
          model: SubCategory,
          include: Category,
        },
      ],
    });
    res.json({ allShopProducts });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = shopRouter;
