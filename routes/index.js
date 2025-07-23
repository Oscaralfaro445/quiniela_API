const express = require("express");
const authRotuer = require("./authRouter");
const comboDataRouter = require("./comboDataRouter");
const formDataRouter = require("./formDataRouter");
const gameResultsRouter = require("./gameResultsRouter");
const gridDataRouter = require("./gridDataRouter");
const matchRouter = require("./matchRouter");
const menuRouter = require("./menuRouter");
const profileRouter = require("./profileRouter");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/auth", authRotuer);
  router.use("/comboData", comboDataRouter);
  router.use("/formData", formDataRouter);
  router.use("/gameResults", gameResultsRouter);
  router.use("/gridData", gridDataRouter);
  router.use("/matchData", matchRouter);
  router.use("/menuData", menuRouter);
  router.use("/profile", profileRouter);
}

module.exports = routerApi;
