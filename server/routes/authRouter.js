const express = require("express");
const bcrypt = require("bcrypt");
const { User, Shop } = require("../db/models");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  console.log(req.body);
  const { name, email, passwordHash, role } = req.body;
  if (!name && !email && !passwordHash) return res.sendStatus(401);
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        passwordHash: await bcrypt.hash(passwordHash, 11),
        name,
        role,
      },
    });
    if (!created) return res.sendStatus(402);
    req.session.user = { id: user.id, name, email, role };
    return res.json({ ...req.session.user });
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
});

authRouter.route("/createshop").post(async (req, res) => {
  const {
    name,
    description,
    logo,
    city,
    address,
    phone,
    email,
    startTime,
    finishingTime,
    weekdays,
    userId,
    ratingLink,
  } = req.body;
  if (!userId && !name && !phone && !city) res.sendStatus(401);
  try {
    const newShop = await Shop.create({
      name,
      description,
      logo,
      city,
      address,
      phone,
      email,
      startTime,
      finishingTime,
      weekdays,
      userId: req.session.user.id,
      ratingLink,
    });
    return res.json(newShop);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

authRouter.post("/signin", async (req, res) => {
  const { email, passwordHash } = req.body;
  if (!email && !passwordHash) return res.sendStatus(405);
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.sendStatus(407);
    if (user && (await bcrypt.compare(passwordHash, user.passwordHash))) {
      req.session.user = {
        id: user.id,
        name: user.name,
        email,
        role: user.role,
      };
      return res.json({ ...req.session.user });
    }
    return res.sendStatus(408);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

authRouter.get("/check", (req, res) => {
  if (req.session.user) {
    return res.json({ ...req.session.user });
  }
  return res.sendStatus(401);
});

authRouter.post("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("sid");
  res.sendStatus(200);
});

module.exports = authRouter;
