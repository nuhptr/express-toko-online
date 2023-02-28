const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const authRouter = require("./app/api/auth/router");
const categoriesRouter = require("./app/api/categories/router");
const booksRouter = require("./app/api/books/router");
const uploadRouter = require("./app/api/uploads/router");
const checkoutsRouter = require("./app/api/checkouts/router");
const transactionRouter = require("./app/api/transaction/router");
const router = require("./app/api/auth/router");

const URL = "/api/v1";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

router.get("/", (req, res) => {
  res.send("Test Api!");
});

app.use(`${URL}`, authRouter);
app.use(`${URL}`, categoriesRouter);
app.use(`${URL}`, booksRouter);
app.use(`${URL}`, uploadRouter);
app.use(`${URL}`, checkoutsRouter);
app.use(`${URL}`, transactionRouter);

module.exports = app;
