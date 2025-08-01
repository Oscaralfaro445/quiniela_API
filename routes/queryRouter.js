const express = require("express");
const router = express.Router();
const { partidos } = require("../bd/partidos");
const { posicionesParticipantes } = require("../bd/posicionesParticipantes");
const { resultadosEquipo } = require("../bd/resultadosEquipo");
const { survivor } = require("../bd/survivor");
const { survivorRanking } = require("../bd/survivorRanking");
const { tablaMarcadores } = require("../bd/tablaMarcadores");

router.post("/Consulta", (req, res) => {
  const { idProceso, idQuery } = req.body;
  const { authorization } = req.headers;
  console.log("Consulta recibida:", { idProceso, idQuery });
  console.log("Parametros recibidos en los headers:", { authorization });

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

    case 5:
      switch (idQuery) {
        case "6":
          res.json({
            estatus: 1,
            data: tablaMarcadores,
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
  }
});

router.post("/Procedure", (req, res) => {
  const { idProceso, idProcedure } = req.body;
  const { authorization } = req.headers;
  console.log("Consulta recibida:", { idProceso, idProcedure });
  console.log("Parametros recibidos en los headers:", { authorization });

  switch (idProceso) {
    case 4:
      switch (idProcedure) {
        case 2:
          res.json({
            estatus: 1,
            data: survivorRanking,
            errorUs: null,
            errorNeg: null,
          });
      }
      break;
  }
});
module.exports = router;
