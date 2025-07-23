const express = require("express");
const router = express.Router();
const { partidos } = require("../bd/partidos");
const { posicionesParticipantes } = require("../bd/posicionesParticipantes");
const { resultadosEquipo } = require("../bd/resultadosEquipo");
const { survivor } = require("../bd/survivor");

router.post("/Consulta", (req, res) => {
  const { idProceso, idQuery } = req.body;
  console.log("Consulta recibida:", { idProceso, idQuery });

  switch (idProceso) {
    case 2:
      switch (idQuery) {
        case "1":
          res.json({
            estatus: 1,
            data: partidos,
            errorUs: null,
            errorNeg: null,
          });
          break;

        case "2":
          res.json({
            estatus: 1,
            data: survivor,
            errorUs: null,
            errorNeg: null,
          });
          break;

        case "3":
          res.json({
            estatus: 1,
            data: resultadosEquipo,
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
      break;

    case 3:
      switch (idQuery) {
        case "4":
          res.json({
            estatus: 1,
            data: posicionesParticipantes,
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
      break;
  }
});

module.exports = router;
