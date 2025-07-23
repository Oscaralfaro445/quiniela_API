const express = require("express");
const router = express.Router();
const { gameResultsData } = require("../bd/gameResultsData");

router.get("/", (req, res) => {
  res.status(200).json(gameResultsData);
});

module.exports = router;
