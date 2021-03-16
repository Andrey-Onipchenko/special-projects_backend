const { Router } = require("express");
const userModel = require("../model/user");
const adminModel = require("../model/admin");

const router = Router();
router.get("/", async (req, res) => {
  res.send("server good work");
});

router.post("/users", async (req, res) => {
  try {
    const { auth } = req.body;
    if (auth) {
      const user = await userModel.findAll();
      res.status(200).json({
        user,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/auth", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await adminModel.findOne({ where: { email } });
    if (user) {
      const userPassword = password === user.password;
      if (userPassword) {
        req.session.user = user;
        req.session.isAuthenticated = true;
        req.session.save((err) => {
          if (err) {
            throw err;
          } else {
            res.status(200).json({
              status: 1,
              msg: "Авторизован",
              auth: true,
            });
          }
        });
      } else {
        res.status(500).json({
          status: 0,
          msg: "Не вiрний пароль",
        });
      }
    } else {
      res.status(500).json({
        status: 0,
        msg: "Користувача не знайденно",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "server error!!!!",
    });
  }
});
router.post("/new", async (req, res) => {
  try {
    const { name, phone } = req.body;
    console.log("PHONE", phone);
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
