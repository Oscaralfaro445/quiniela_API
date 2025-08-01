const express = require("express");
const routerApi = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3001;

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://tf0tfk68-3000.usw3.devtunnels.ms",
    ],
    credentials: true,
  })
);
app.use(cookieParser());

routerApi(app);

app.get("/", (req, res) => {
  res.send("Servidor funcionando...");
});

app.listen(port, () => {
  console.log("Escuchando desde el puerto " + port);
});
