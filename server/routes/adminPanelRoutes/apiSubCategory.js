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
  .post(async (req, res) => {
    // create
    console.log(req.body);
    try {
      const newSubCategory = await SubCategory.create({ ...req.body });
      res.json({ data: newSubCategory });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

subCategoryRouter
  .route("/many")
  .delete(async (req, res) => {
    // deleteMany
    res.json({ data: await SubCategory.deleteMany(req.body) });
  });

subCategoryRouter
  .route("/:id")
  .get(async (req, res) => {
    // getOne
    try {
      const subCategory = await SubCategory.findByPk(req.params.id);
      res.json({ data: subCategory });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    // delete
    try {
      await SubCategory.destroy({ where: { id: req.params.id } });
      res.json({ data: req.body });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    // update
    try {
      await SubCategory.update(
        { ...(await SubCategory.findByPk(req.params.id)), ...req.body },
        { where: { id: req.params.id } }
      );
      const subCategory = await SubCategory.findByPk(req.params.id);
      res.json({ data: subCategory });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = subCategoryRouter;
