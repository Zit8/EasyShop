const express = require("express");
const { Product } = require('../../db/models')

const productRouter = express.Router();

productRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const allProducts = await Product.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.json({ data: allProducts, total: allProducts.length });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    console.log(req.body);
    try {
      const newPost = await Product.create({ ...req.body });
      res.json(newPost);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

productRouter.route("/:id").delete(async (req, res) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = productRouter;
