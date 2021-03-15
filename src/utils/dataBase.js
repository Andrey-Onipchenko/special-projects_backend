const Sequelize = require("sequelize");

const SCHEMA_NAME = "post";
const USER_NAME = "andrey";
const PASSWORD = "123q123q";

const sequelize = new Sequelize(SCHEMA_NAME, USER_NAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
