const express = require("express");
const { ShoppingCart, ShoppingCartItem, Product } = require("../../db/models");

const orderRouter = express.Router();

orderRouter
  .route("/")
  .get(async (req, res) => {
  try {
    const allOrders = await ShoppingCart.findAll({
      include: [
        {
          model: ShoppingCartItem,
          include: Product,
        },
      ],
    });
    res.json(allOrders[0].dataValues);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  });

  module.exports = orderRouter;
