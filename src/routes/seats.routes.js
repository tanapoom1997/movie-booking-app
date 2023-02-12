const express = require("express");
const router = express.Router();
const SeatsController = require("../controllers/seats.controller");
const seatsController = new SeatsController();
const { successResponse } = require("../utils");

router.get("/available-seats", async (req, res) => {
  try {
    const listSeatsAvailable = await seatsController.showAvailableSeats(req);
    return successResponse(res, "", listSeatsAvailable);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
