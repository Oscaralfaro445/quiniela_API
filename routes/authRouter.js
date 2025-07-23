const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");
const { serialize } = require("cookie");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // verificar si existe el correo y la contrasena
  if (email === "admin@cs365.com" && password === "admin") {
    // Método para inicializar el token con el login
    const token = jwt.sign(
      {
        // Le vamos a mandar los valores que vamos a almacenar, estos valores se traeran de la base de datos.
        email: "admin@cs365.com",
        username: "Oscar Alfaro",
        rol: "Admin",
        // Podriamos agregar el id y el rol del usuario
      },
      "secret" // String privado que hace unico nuestro token
    );

    // Serializamos el token para almacenarlo de manera isntantanea
    const serialized = serialize("authToken", token, {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    // Seteamos el header para mandar la cookie y guardarla automáticamente en el navegador
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({ message: "login successful" });
  }

  res.status(401).json({ error: "invalid email or password" });
});

router.post("/logout", (req, res) => {
  const { authToken } = req.cookies;

  // console.log(authToken);

  // Verificamos si la cookie existe
  if (!authToken) {
    return res.status(401).json({ error: "no token" });
  }

  // Moficamos la cookie u ponemos el tiempo de vida en 0
  try {
    verify(authToken, "secret");
    const serialized = serialize("authToken", null, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({ message: "logout succesfully" });
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
});

module.exports = router;
