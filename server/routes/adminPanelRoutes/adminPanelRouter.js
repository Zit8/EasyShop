const express = require("express");
const { Post } = require("../../db/models");

const postRouter = express.Router();

postRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const allPosts = await Post.findAll({
        order: [["createdAt", "DESC"]],
      });
      console.log();
      res.json({ data: allPosts, total: allPosts.length });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    console.log(req.body);
    try {
      const newPost = await Post.create({ ...req.body });
      res.json(newPost);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

postRouter.route("/:id").delete(async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = postRouter;
