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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdmVBcGxpY2FjaW9uIjoiTkZMIiwiY3ZlVXN1YXJpbyI6Im1hcmlvQHF1aW5pZWxhLmNvbSIsImN2ZUlkaW9tYSI6IkVTIiwiY3ZlUGVyZmlsIjoiVEVNUE9SQUwiLCJpYXQiOjE3NTI4NTE2NzcsImV4cCI6MTc1Mjg5NDg3N30.-F22cd7kEhICPVtN1iFWOxUhmPINwGAJNCMvBjPWO9I",
        cveIdioma: "ES",
        cvePerfil: "TEMPORAL",
        nombre: "MARIO ALBERTO LOPEZ PACHECO",
        idQuiniela: 1,
        idParticipante: 8,
        idPeriodo: "12",
      },
    ],
    errorUs: null,
    errorNeg: null,
  });
});

module.exports = router;
