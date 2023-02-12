const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const PORT = 8889;

// Conection to mysql.
// const db = require("./db-conection");

// require routes.
const routes = require("./src/routes");

// db.connectToMySQL();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello...");
});

app.use('/v1' ,routes);

app.listen(PORT, () => {
  console.log("The server has been started.");
});
