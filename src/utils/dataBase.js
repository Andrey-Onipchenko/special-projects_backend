const Sequelize = require("sequelize");

// const SCHEMA_NAME = "post";
// const USER_NAME = "andrey";
// const PASSWORD = "123q123q";

const SCHEMA_NAME = "sp_nod";
const USER_NAME = "sp_nod";
const PASSWORD = "m15N89BC65ng'";

const sequelize = new Sequelize(SCHEMA_NAME, USER_NAME, PASSWORD, {
  // host: "localhost",
  host: "192.168.213.250",
  dialect: "mysql",
});

module.exports = sequelize;
