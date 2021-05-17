const { Telegraf } = require("telegraf");
const excel = require("exceljs");
const userModel = require("../model/user");
const userHuawei = require("../model/userHuawei");
const config = require("../utils/env");
module.exports = bot = new Telegraf(config.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome to ray"));

// Хуторок пасха
bot.hears("хуторок-пасха", async (ctx) => {
  userModel.count().then((count) => {
    ctx.reply(`Количество учасников ${count}`);
  });
});
bot.hears("хуторок-пасха-док", async (ctx) => {
  const user = await userModel.findAll();
  const workbook = new excel.Workbook();
  const worksheet = workbook.addWorksheet("hutorok-data");
  const dataParse = JSON.parse(JSON.stringify(user));
  worksheet.columns = [
    {
      header: "Имя",
      key: "name",
      width: 30,
    },
    {
      header: "Телефон",
      key: "phone",
      width: 30,
    },
    {
      header: "Дата реєстрації",
      key: "createdAt",
      width: 30,
    },
  ];

  worksheet.addRows(dataParse);
  const source = "./hutorok2-data.xlsx";
  workbook.xlsx.writeFile(source).then(() => {
    ctx.replyWithDocument({ source });
  });
});

// Huawei
bot.hears("huawei", async (ctx) => {
  userHuawei.count().then((count) => {
    ctx.reply(`Количество учасников ${count}`);
  });
});
bot.hears("huawei-doc", async (ctx) => {
  const user = await userHuawei.findAll();
  const workbook = new excel.Workbook();
  const worksheet = workbook.addWorksheet("huawei-data");
  const dataParse = JSON.parse(JSON.stringify(user));
  worksheet.columns = [
    {
      header: "Имя",
      key: "name",
      width: 30,
    },
    {
      header: "Телефон",
      key: "phone",
      width: 30,
    },
    {
      header: "Дата реєстрації",
      key: "createdAt",
      width: 30,
    },
  ];

  worksheet.addRows(dataParse);
  const source = "./huawei-data.xlsx";
  workbook.xlsx.writeFile(source).then(() => {
    ctx.replyWithDocument({ source });
  });
});
