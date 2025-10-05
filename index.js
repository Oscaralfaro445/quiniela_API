const express = require("express");
const routerApi = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3001;

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://tf0tfk68-3000.usw3.devtunnels.ms",
    "https://quiniela-frontend-next-git-alfaro-oscars-projects-70fcdc42.vercel.app",
    "https://quiniela-frontend-next.vercel.app",
  ],
  credentials: true, // permite enviar cookies y headers de autenticación
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
// app.options("*", cors(corsOptions));

routerApi(app);

app.get("/", (req, res) => {
  res.send("Servidor funcionando...");
});

app.listen(port, () => {
  console.log("Escuchando desde el puerto " + port);
});
