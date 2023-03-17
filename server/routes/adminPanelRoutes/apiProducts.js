const express = require("express");
const upload = require("../../middleware/upload");
const { Product } = require("../../db/models");

const productRouter = express.Router();

productRouter
  .route("/")
  .get(async (req, res) => {
    // getList{ data: {Record[]}, total: {int} }
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
  .post(upload.single("image"), async (req, res) => {
    // create
    console.log(req.body.data, "<<<<<<<<<<<<<<<<<");
    try {
      const newProduct = await Product.create(req.body.data);
      res.json({ data: newProduct });
    } catch (error) {
      console.log(error);
      res.sendStatus(501);
    }
  });

productRouter
  .route("/many")
  .patch(async (req, res) => {
    // updateMany
    try {
      const { ids, data } = req.body;
      res.json({ data: await Product.updateMany(ids, data) });
    } catch (error) {
      console.log(error);
      res.sendStatus(502);
    }
  })
  .post(async (req, res) => {
    // deleteMany
    try {
      console.log(req.body, '<<<<<<<<<<<<<<<<<<<<<<<<');
      res.json({ data: await Product.deleteMany(req.body.ids) });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
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
      res.sendStatus(503);
    }
  })
  .delete(async (req, res) => {
    // delete
    try {
      await Product.destroy({ where: { id: req.params.id } });
      res.json({ data: req.body });
    } catch (error) {
      console.log(error);
      res.sendStatus(504);
    }
  })
  .patch(upload.single("image"), async (req, res) => {
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
      res.sendStatus(505);
    }
  });

module.exports = productRouter;
