// Configuración del server
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const voleyball = require("volleyball");
const routes = require("./routes");
const db = require("./db");

app.use(voleyball);
app.use(express.static("build"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

// app.use("/api", (req, res) => {
//   res.sendStatus(404);
// });
// app.use((err, req, res, next) => {
//   res.status(500).send(err.message);
// });

db.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
});
