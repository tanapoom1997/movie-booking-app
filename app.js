const express = require("express");
const app = express();
const PORT = 8889;

// Conection to mysql.
const db = require("./db-conection");

// require routes.
const routes = require("./src/routes");

db.connectToMySQL();

app.get("/", (req, res) => {
  res.send("Hello...");
});

app.use('/v1' ,routes);

app.listen(PORT, () => {
  console.log("The server has been started.");
});
