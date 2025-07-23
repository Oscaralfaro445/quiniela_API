const express = require("express");
const { gridData1, gridData2 } = require("../bd/gridData");
const router = express.Router();

router.get("/:cveForma", async (req, res) => {
  try {
    // const { pageSize, pageNumber, ...query } = req.query;
    const { cveForma } = req.params;
    const { rows, page } = req.query;
    console.log("cveForma:", cveForma);
    // console.log("rows: ", rows);
    // console.log("page: ", page);

    const skipRows = parseInt((page - 1) * rows) || 0;
    const takeRows = parseInt(rows) || 10;

    if (cveForma === "1") {
      let filteredData = gridData1;
      const result = filteredData.slice(skipRows, skipRows + takeRows);
      res.json(result);
    } else if (cveForma === "2") {
      let filteredData = gridData2;
      const result = filteredData.slice(skipRows, skipRows + takeRows);
      res.json(result);
    }
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({
      success: false,
      message: "Error al procesar la solicitud",
    });
  }
  /* if (Object.keys(query).length > 0) {
      filteredData = gridData.filter((item) => {
        return Object.entries(query).every(([key, value]) => {
          const itemValue = item[key];
          if (itemValue === undefined) return false;

          if (typeof itemValue === "string") {
            return itemValue.toLowerCase().includes(value.toLowerCase());
          }

          if (typeof itemValue === "number") {
            return itemValue === Number(value); // <-- CORRECCIÓN
          }

          return itemValue == value; // fallback
        });
      });
    } */
});

module.exports = router;
