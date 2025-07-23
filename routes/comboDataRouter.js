const express = require("express");
const { comboData } = require("../bd/comboData");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json(comboData);
});

module.exports = router;
