const express = require("express");
const {
  Shop,
  Product,
  SubCategory,
  Category,
  ShoppingCard,
  ShoppingCartItem,
} = require("../db/models");

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
    res.json([...allShopProducts]);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

shopRouter.route("/:name/order").post(async (req, res) => {
  try {
    const {
      products,
      userId,
      deliveryAddress,
      selfDelivery,
      deliveryData,
      deliveryTime,
    } = req.body;
    console.log(
      products,
      userId,
      deliveryAddress,
      selfDelivery,
      deliveryData,
      deliveryTime
    );
    const shopId = await Shop.findOne({ where: { name: req.params.name } });
    const shoppingCart = await ShoppingCard.create({
      shopId: shopId.dataValues.id,
      userId,
      deliveryAddress,
      selfDelivery,
      deliveryData,
      deliveryTime,
    });
    await ShoppingCartItem.addProducts(products, shopId, shoppingCart.id);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = shopRouter;
