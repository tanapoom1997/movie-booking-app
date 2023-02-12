const express = require("express");
const router = express.Router();

const films = require("./films.routes");
const bookings = require("./booking.routes");

router.use("/films", films);
router.use("/booking", bookings);

module.exports = router;
