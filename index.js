const express = require("express");
var cors = require("cors");
const homeRouts = require("./src/routes/home");
const sequelize = require("./src/utils/dataBase");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const sessionOptions = require("./src/utils/session-options");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());

const sessionStore = new MySQLStore(sessionOptions);
// app.use(express.urlencoded({ extended: false }));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(
  session({
    key: "auth",
    secret: "some secret value",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);
app.use(express.json());
app.use("/", homeRouts);

const PORT = process.env.PORT || 8000;
const HOST = "192.168.213.27";

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, HOST);
    console.log(`Server run... PORT:${PORT}, HOST:${HOST}`);
  } catch (err) {
    console.log(err);
  }
}
start();
