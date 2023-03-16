const express = require("express");
const upload = require("../../middleware/upload");
const { SubCategory } = require("../../db/models");

const subCategoryRouter = express.Router();

subCategoryRouter
  .route("/")
  .get(async (req, res) => {
    // getList{ data: {Record[]}, total: {int} }
    try {
      const allSubCategory = await SubCategory.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.json({ data: allSubCategory, total: allSubCategory.length });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  .post(upload.single("image"), async (req, res) => {
    // create
    console.log(req.body);
    try {
      const newProduct = await Product.create({ ...req.body });
      res.json(newProduct);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

subCategoryRouter
  .route("/many")
  .patch(async (req, res) => {
    // updateMany
    try {
      const { ids, data } = req.body;
      res.json({ data: await Product.updateMany(ids, data) });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    // deleteMany
    res.json({ data: await Product.deleteMany(req.body) });
  });

subCategoryRouter
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
      res.sendStatus(500);
    }
  });

module.exports = subCategoryRouter;
