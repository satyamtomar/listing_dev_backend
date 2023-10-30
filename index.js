const createError=require("http-errors");
const connectToMongo = require("./db");
const express = require("express");
const bodyParser=require('body-parser');
var cors = require("cors");
const {
  LIST_ROUTES
} = require("./routes");
const cookieSession = require("cookie-session");
const router = express.Router();
connectToMongo();

const app = express();
const port = process.env.PORT || 5001;
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: "session",
    httpOnly: false,
    keys: ["satyam"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(cors());
app.use(express.json());
//routes available

app.use("/list", LIST_ROUTES);
app.get("/", (req, res) => {
  res.send(`Hello Satyam...port  ${port}`);
});
app.use(function (req, res, next) {
  next(createError(404));
});
app.listen(port, () => {
  console.log(`Bohanbackend listening at http://localhost:${port}`);
});