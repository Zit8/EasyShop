const express = require("express");
const { Product } = require("../../db/models");

const productRouter = express.Router();

productRouter
  .route("/")
  .get(async (req, res) => {
    // getList
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
    // create
    console.log(req.body);
    try {
      const newPost = await Product.create({ ...req.body });
      res.json(newPost);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

productRouter
  .route("/many")
  .patch(async (req, res) => {
    // updateMany
    try {
      const result = await Product.updateMany(req.body);
      console.log(result);
      res.json({ data: result });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    res.json({ data: await Product.deleteMany(req.body) });
  });

productRouter
  .route("/:id")
  .get(async (req, res) => {
    // getOne
    try {
      const product = await Product.findByPk(req.params.id);
      res.json({ data: product });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    // delete
    try {
      await Product.destroy({ where: { id: req.params.id } });
      res.json({ data: req.body });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    // update
    try {
      await Product.update(
        { ...(await Product.findByPk(req.params.id)), ...req.body },
        { where: { id: req.params.id } }
      );
      const product = await Product.findByPk(req.params.id);
      res.json({ data: product });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = productRouter;
