const express = require("express");
const router = express.Router();

router.post("/Crea", (req, res) => {
  const { idProceso, model, data } = req.body;
  console.log("Parametros recibidos en el body:", idProceso, model, data);

  switch (idProceso) {
    case 2:
      switch (model) {
        case "Q_SURVIVOR":
          res.json({
            estatus: 1,
            data: [{ contador: 1 }],
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
      break;
  }
});

router.post("/BulkU", (req, res) => {
  const { idProceso, model, data } = req.body;
  console.log("Parametros recibidos en el body:", idProceso, model, data);

  switch (idProceso) {
    case 2:
      switch (model) {
        case "Q_QUIN_PARTICIPANTE":
          res.json({
            estatus: 1,
            data: [{ contador: 8 }],
            errorUs: null,
            errorNeg: null,
          });
          break;
      }
      break;
  }
});

module.exports = router;
