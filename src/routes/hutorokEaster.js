const { Router } = require("express");
const userModel = require("../model/user");

const router = Router();
router.get("/", async (req, res) => {
  res.send("server good work 07.04");
});

router.post("/new", async (req, res) => {
  try {
    const { name, phone } = req.body;
    console.log("name", name);
    console.log("phone", phone);
    const user = await userModel.findOne({ where: { phone } });
    if (user) {
      res.json({
        status: 0,
        msg: "Пользователь с таким Телефоном уже существует",
      });
    } else {
      const createUser = await userModel.create({
        name,
        phone,
      });
      res.status(201).json({ status: 1, msg: "Вітаємо! Ви зареєстровані" });
    }
  } catch (err) {
    res.status(500).json({
      message: "server error!",
    });
  }
});

module.exports = router;
