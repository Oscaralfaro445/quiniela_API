const express = require("express");
const router = express.Router();
const { menu } = require("../bd/menu");

router.post("/", (req, res) => {
  res.status(200).json({
    estatus: 1,
    data: menu,
    errorUs: null,
    errorNeg: null,
  });
});

module.exports = router;
