const express = require("express");
const router = express.Router();
const { menuData } = require("../bd/menuData");

router.get("/", (req, res) => {
  res.status(200).json({
    data: menuData,
    message: "Datos enviados de manera correcta",
  });
});

module.exports = router;
