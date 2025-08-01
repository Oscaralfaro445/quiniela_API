const express = require("express");
const router = express.Router();

router.post("/Autentica", (req, res) => {
  const body = req.body;
  console.log("Body recibido:", body);

  res.json({
    estatus: 1,
    data: [
      {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdmVBcGxpY2FjaW9uIjoiTkZMIiwiY3ZlVXN1YXJpbyI6Im1hcmlvQHF1aW5pZWxhLmNvbSIsImN2ZUlkaW9tYSI6IkVTIiwiY3ZlUGVyZmlsIjoiVEVNUE9SQUwiLCJpYXQiOjE3NTQwMTEzMTMsImV4cCI6MTc1NDA1NDUxM30.RTRUChp8EwwzQIBLECBZiV5DJ9-orbMoceSp9GPQBhc",
        cveIdioma: "ES",
        cvePerfil: "TEMPORAL",
        nombre: "MARIO ALBERTO LOPEZ PACHECO",
        idQuiniela: 1,
        idParticipante: 8,
        idPeriodo: "13",
        bResSurv: false,
        fLimite: "2010-07-31",
        horaLimite: "20:00:00",
        titQuiniela: "QUINIELA DE PRUEBA",
        bSurvivor: false,
      },
    ],
    errorUs: null,
    errorNeg: null,
  });
});

module.exports = router;
