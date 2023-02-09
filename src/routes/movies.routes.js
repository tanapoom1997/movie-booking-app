const express = require("express");
const router = express.Router();
const { Movies } = require("../models/index");

router.get("/get-movie", async (req, res) => {
  const listMovies = await Movies.findAll();
  const data = JSON.parse(JSON.stringify(listMovies, null, 2))
  const dataObject = {
    resCode: 200,
    message: "Success",
    data,
  };
  res.send(dataObject).status(200);
});

module.exports = router;
