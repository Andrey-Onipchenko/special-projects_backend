const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./src/utils/dataBase");
const config = require("./src/utils/env");

const hutorokEaster = require("./src/routes/hutorokEaster");
const bot = require("./src/tgBot/bot");
const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use("/api/hutorok/easter/", hutorokEaster);

async function start() {
  try {
    await sequelize.sync();
    app.listen(config.PORT, () => {
      console.log(`Server run mod ${config.MOD}... PORT:${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
bot.launch();
