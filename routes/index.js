const express = require("express");
const crudRouter = require("./crudRouter");
const menuRouter = require("./menuRouter");
const loginRouter = require("./loginRouter");
const queryRouter = require("./queryRouter");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/Crud", crudRouter);
  router.use("/Menu", menuRouter);
  router.use("/Login", loginRouter);
  router.use("/Query", queryRouter);
}

module.exports = routerApi;
