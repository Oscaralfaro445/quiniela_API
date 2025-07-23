const express = require("express");
const router = express.Router();
const { matchData } = require("../bd/matchData");

router.get("/", (req, res) => {
  res.status(200).json(matchData);
});

module.exports = router;
