const express = require("express");
const router = express.Router();
const { verify } = require("jsonwebtoken");

router.get("/", (req, res) => {
  // Extraemos el token almacenado en la cookie
  const { authToken } = req.cookies;

  // console.log(authToken);

  // Verificamos que el token exista
  if (!authToken) {
    return res.status(401).json({ error: "no token" });
  }

  try {
    // Desenmascaramos el token usando la palabra secreta
    const user = verify(authToken, "secret");
    // console.log(user);
    // Aqui podemos regresar toda la informacion que almacena el token y regresarla al back
    return res.status(200).json({ email: user.email, username: user.username });
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
});

module.exports = router;
