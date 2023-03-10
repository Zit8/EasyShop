const express = require("express");
const { Category } = require("../../db/models");

const categoryRouter = express.Router();

categoryRouter
  .route("/")
  .get(async (req, res) => {
    // getList
    try {
      const allcategories = await Category.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.json({ data: allcategories, total: allcategories.length });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    // create
    try {
      const newCategory = await Category.create({ ...req.body });
      res.json(newCategory);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

categoryRouter
  .route("/many")
  .patch(async (req, res) => {
    // updateMany
    try {
      res.json({ data: await Category.updateMany(req.body) });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    // deleteMany
    res.json({ data: await Category.deleteMany(req.body) });
  });

categoryRouter
  .route("/:id")
  .get(async (req, res) => {
    // getOne
    try {
      const category = await Category.findByPk(req.params.id);
      res.json({ data: category });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    // delete
    try {
      const category = await Category.findByPk(req.params.id);
      console.log(category);
      await Category.destroy({ where: { id: req.params.id } });
      console.log(category);
      res.json({ data: category });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    // update
    try {
      await Category.update(
        { ...(await Category.findByPk(req.params.id)), ...req.body },
        { where: { id: req.params.id } }
      );
      const category = await Category.findByPk(req.params.id);
      res.json({ data: category });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = categoryRouter;
