const express = require("express");
const { Shop } = require("../db/models");

const shopRouter = express.Router();

shopRouter.get("/api/:name", async (req, res) => {
  try {
    const oneShop = await Shop.findOne({ where: { name: req.params.name } });
    // console.log(oneShop.dataValues, "===========");
    return res.json(oneShop.dataValues);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = shopRouter;
