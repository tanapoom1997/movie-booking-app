const express = require("express");
const router = express.Router();
const { successResponse } = require("../utils");
const FilmsController = require("../controllers/films.controllers");
const filmsController = new FilmsController();

router.get("/get-film", async (req, res) => {
  try {
    const getFilmsList = await filmsController.getFilmsList(req);
    return successResponse(res, 200, "", getFilmsList);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
