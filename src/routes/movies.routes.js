const express = require("express");
const router = express.Router();
const { successResponse } = require("../utils");
const MoviesController = require("../controllers/movies.controllers");
const moviecontroller = new MoviesController();

router.get("/get-movie", async (req, res) => {
  try {
    const getMoviesList = await moviecontroller.getMoviesList(req);
    return successResponse(res, "", getMoviesList);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
