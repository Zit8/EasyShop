const express = require("express");
const { User } = require("../../db/models");

const userRouter = express.Router();

userRouter.route("/").get(async (req, res) => {
  // getList{ data: {Record[]}, total: {int} }
  try {
    const allUsers = await User.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json({ data: allUsers, total: allUsers.length });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = userRouter;
