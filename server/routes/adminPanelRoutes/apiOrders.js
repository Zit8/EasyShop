const express = require("express");
const { ShoppingCart, ShoppingCartItem, Product } = require("../../db/models");

const orderRouter = express.Router();

orderRouter.route("/").get(async (req, res) => {
  try {
    const allOrders = await ShoppingCart.findAll({
      include: [
        {
          model: ShoppingCartItem,
          include: Product,
        },
      ],
    });
    console.log(allOrders[0].dataValues);
    res.json({ data: allOrders[0].dataValues, total: allOrders[0].dataValues.length });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);                                            
  }
});

module.exports = orderRouter;
