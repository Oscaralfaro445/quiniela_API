const express = require("express");
const router = express.Router();
const { partidos } = require("../bd/partidos");
const { partidos2 } = require("../bd/partidos");
const { posicionesParticipantes } = require("../bd/posicionesParticipantes");
const { resultadosEquipo } = require("../bd/resultadosEquipo");
const { survivor } = require("../bd/survivor");
const { survivorRanking } = require("../bd/survivorRanking");
const { tablaMarcadores } = require("../bd/tablaMarcadores");
const { menu } = require("../bd/menu");
const { pagos } = require("../bd/pagos");
const { consistencia } = require("../bd/consistencia");
const {
  dashboard1,
  dashboard2,
  dashboard5,
  dashboard7,
} = require("../bd/dashboard");
const ganancias = require("../bd/ganaciasDashboard");

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
            data: partidos2,
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
      break;

    case 7:
      switch (idQuery) {
        case "7":
          res.json({
            estatus: 1,
            data: null,
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
      break;

    case 10:
      switch (idQuery) {
        case "8":
          res.json({
            estatus: 1,
            data: consistencia,
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
      break;

    case 14:
      switch (idQuery) {
        case 9:
          res.json({
            estatus: 1,
            data: dashboard2,
            errorUs: null,
            errorNeg: null,
          });
          break;

        case 10:
          res.json({
            estatus: 1,
            data: dashboard1,
            errorUs: null,
            errorNeg: null,
          });
          break;

        case 11:
          res.json({
            estatus: 1,
            data: dashboard7,
            errorUs: null,
            errorNeg: null,
          });
          break;

        case 12:
          res.json({
            estatus: 1,
            data: dashboard5,
            errorUs: null,
            errorNeg: null,
          });
          break;

        case 13:
          res.json({
            estatus: 1,
            data: [
              {
                totalQuiniela: 16800,
                totalSurvivor: 4950,
                totalPremio: 300,
              },
            ],
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
      break;

    case 16:
      switch (idQuery) {
        case 15:
          res.json({
            estatus: 1,
            data: ganancias,
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
      break;
  }
});

router.post("/Procedure", (req, res) => {
  const { idProceso, idProcedure } = req.body;
  const body = req.body;
  const { authorization } = req.headers;
  console.log("Body recibido:", body);
  console.log("Consulta recibida:", { idProceso, idProcedure });
  console.log("Parametros recibidos en los headers:", { authorization });

  switch (idProceso) {
    case 3:
      switch (idProcedure) {
        case 4:
          res.json({
            estatus: 1,
            data: 1,
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
      break;

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

    case 6:
      switch (idProcedure) {
        case 3:
          res.json({
            estatus: 1,
            data: [
              {
                idEquipoSuv: 26,
                nomEquipo: "San Francisco 49ers",
                bResucita: false,
                costoSurvivor: 250,
              },
            ],
            errorUs: null,
            errorNeg: null,
          });
      }
      break;

    case 8:
      switch (idProcedure) {
        case 5:
          res.json({
            estatus: 1,
            data: [{ Contador: 0 }],
            errorUs: null,
            errorNeg: [
              { errorNeg: "El proceso ya fue ejecutado" },
              { errorNeg: "Mensaje de prueba 1" },
              { errorNeg: "Mensaje de prueba 2" },
            ],
          });
          break;
      }
      break;

    case 9:
      switch (idProcedure) {
        case 6:
          res.json({
            estatus: 1,
            data: [{ Contador: 2 }],
            errorUs: "Error al iniciar el proceso de apertur",
            errorNeg: [
              { errorNeg: "El proceso ya fue ejecutado" },
              { errorNeg: "Mensaje de prueba 1" },
              { errorNeg: "Mensaje de prueba 2" },
            ],
          });
          break;
      }
      break;

    case 12:
      switch (idProcedure) {
        case 7:
          res.json({
            estatus: 1,
            data: menu,
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
      break;
  }
});
module.exports = router;
