// GET / api / user -> Muestra data de user
// POST /api/user -> Crea nuevo user
// PUT /api/user -> Agrega / Borra favoritos
// DELETE /api/user -> Borra user

const express = require("express");
const User = require("../models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { generateToken, validateToken } = require("../config/token");
const { validateAuth } = require("../middlewares/auth");

router.get("/users", (req, res) => {
  User.findAll()
    .then((result) => res.status(200).send(result))
    .catch((err) => console.log(err));
});

router.get("/user/:id", (req, res) => {
  User.findAll({ where: { id: req.params.id } })
    .then((result) => res.status(200).send(result))
    .catch((err) => console.log(err));
});

router.post("/user", (req, res) => {
  User.create(req.body)
    .then((result) => res.status(201).send(result))
    .catch((err) => console.log(err));
});

router.put("/favs/:id", async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  const fav = req.body;
  const favoritos = user.favs;

  for (let i = 0; i < favoritos.length; i++) {
    if (favoritos[i].id === fav.id)
      return res.status(401).send("Ya está en favoritos");
  }
  favoritos.push(fav);
  User.update(
    { favs: favoritos },
    { returning: true, where: { id: req.params.id } }
  )
    .then((usuario) => {
      res.send(usuario);
    })
    .catch("Error");
});
////////// DELETE FAV
router.put("/favsDelete/:id", async (req, res) => {
  console.log("adentro");
  const user = await User.findOne({ where: { id: req.params.id } });
  const pelicula = req.body;
  const favoritos = user.favs;

  for (let i = 0; i < favoritos.length; i++) {
    if (favoritos[i].id === pelicula.id) {
      favoritos.splice(i, 1);
    }
  }

  User.update(
    { favs: favoritos },
    { returning: true, where: { id: req.params.id } }
  )
    .then((usuario) => {
      res.send(usuario);
    })
    .catch("Error");
});

router.put("/vistas/:id", async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  const vista = req.body;
  const vistas = user.vistas;

  for (let i = 0; i < vistas.length; i++) {
    if (vistas[i].id === vista.id)
      return res.status(401).send("Ya está en tu lista");
  }

  vistas.push(vista);
  User.update(
    { vistas: vistas },
    { returning: true, where: { id: req.params.id } }
  )
    .then((usuario) => {
      res.send(usuario);
    })
    .catch("Error");
});

router.put("/vistasDelete/:id", async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  const pelicula = req.body;
  const vistas = user.vistas;

  for (let i = 0; i < vistas.length; i++) {
    if (vistas[i].id === pelicula.id) {
      vistas.splice(i, 1);
    }
  }

  User.update(
    { vistas: vistas },
    { returning: true, where: { id: req.params.id } }
  )
    .then((usuario) => {
      res.send(usuario);
    })
    .catch("Error");
});

router.delete("/user", (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(res.status(204).send("Deleted"))
    .catch((err) => console.log(err));
});

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
});

router.get("/secret", validateAuth, (req, res) => {
  res.send(req.user);
});

router.get("/me", validateAuth, (req, res) => { 
  try {
    res.send(req.user);
  } catch (error) {
    console.log("ERROR", error);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
