const express = require("express");
const router = express.Router();
const { formData1, formData2 } = require("../bd/formData");

router.get("/:cveForma", async (req, res) => {
  const { cveForma } = req.params;
  console.log("cveForma:", cveForma);

  if (!cveForma) {
    return res.status(400).json({
      error: "Parametro cveForma es requerido",
    });
  }

  if (cveForma === "1") {
    return res.status(200).json(formData1);
  }

  if (cveForma === "2") {
    return res.status(200).json(formData2);
  }
  /* const { cveAplicacion, cveForma } = req.query;

  if (cveAplicacion === "INFRA" && cveForma === "123") {
    res.status(200).json(formData);
  } else {
    return res.status(400).json({
      error: "Parametros invalidos",
    });
  } */
  //res.status(200).json(formData);
});

module.exports = router;
