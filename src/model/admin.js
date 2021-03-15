const Sequelize = require("sequelize");
const sequelize = require("../utils/dataBase");

const admin = sequelize.define("admin", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = admin;
