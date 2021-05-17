const { Router } = require("express");
const userHuawei = require("../model/userHuawei");

const router = Router();
router.get("/", async (req, res) => {
  res.send("server good work huawei 17.05.21");
});

router.post("/new", async (req, res) => {
  try {
    const { name, phone } = req.body;
    const user = await userHuawei.findOne({ where: { phone } });
    if (user) {
      res.json({
        status: 0,
        msg: "Пользователь с таким Телефоном уже существует",
      });
    } else {
      const createUser = await userHuawei.create({
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
