const express = require("express");
const router = express.Router();

const movies = require("./movies.routes");
const tickets = require("./tickets.routes");
const seats = require("./seats.routes");

router.use("/movies", movies);
router.use("/tickets", tickets);
router.use("/seats", seats);

module.exports = router;
