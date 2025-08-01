const express = require("express");
const router = express.Router();
const { menuAdmin } = require("../bd/menu");

router.post("/", (req, res) => {
  res.status(200).json({
    estatus: 1,
    data: menuAdmin,
    errorUs: null,
    errorNeg: null,
  });
});

module.exports = router;
