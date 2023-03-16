const express = require("express");
const {
  Shop,
  Product,
  SubCategory,
  Category,
  ShoppingCart,
  ShoppingCartItem,
} = require("../db/models");
const upload = require("../middleware/upload");

const shopRouter = express.Router();

const normalizeUrlName = (name) =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "");

shopRouter.route("/").post(upload.single("logo"), async (req, res) => {
  try {
    const {
      name,
      description,
      logo,
      city,
      address,
      phone,
      email,
      startTime,
      finishingTime,
      weekdays,
      userId,
      ratingLink,
    } = req.body;
    await Shop.create({
      name,
      description,
      logo,
      city,
      address,
      phone,
      email,
      startTime,
      finishingTime,
      weekdays,
      userId,
      ratingLink,
      urlName: normalizeUrlName(name),
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

shopRouter.route("/:urlName").get(async (req, res) => {
  try {
    const oneShop = await Shop.findOne({
      where: { urlName: req.params.urlName },
    });
    console.log(oneShop, "===========");
    if (!oneShop) return res.end()
    return res.json(oneShop.dataValues);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

shopRouter.route("/:urlName/products").get(async (req, res) => {
  try {
    const shop = await Shop.findOne({ where: { urlName: req.params.urlName } });
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

shopRouter.route("/:urlName/order").post(async (req, res) => {
  try {
    const {
      products,
      userId,
      deliveryAddress,
      selfDelivery,
      deliveryData,
      deliveryTime,
    } = req.body;
    const shop = await Shop.findOne({ where: { urlName: req.params.urlName } });
    const shoppingCart = await ShoppingCart.create({
      shopId: shop.dataValues.id,
      userId,
      deliveryAddress,
      selfDelivery,
      deliveryData,
      deliveryTime,
    });
    await ShoppingCartItem.addProducts(
      products,
      shop.dataValues.id,
      shoppingCart.id
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = shopRouter;
