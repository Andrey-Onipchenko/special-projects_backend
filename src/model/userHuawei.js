const Sequelize = require("sequelize");
const sequelize = require("../utils/dataBase");

const user = sequelize.define(
  "UserHuawei",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    charset: "utf8",
    collate: "utf8_unicode_ci",
  }
);

module.exports = user;
