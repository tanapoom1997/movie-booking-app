const express = require("express");
const router = express.Router();
const { successResponse } = require("../utils");
const BookingController = require("../controllers/booking.controller");
const bookingController = new BookingController();

router.post("/book-ticket", async (req, res) => {
  try {
    const result = await bookingController.insertBooking(req);
    return successResponse(res, 200, "", result);
  } catch (error) {
    throw error;
  }
});
router.delete("/cancel-ticket", async (req, res) => {
  try {
    const result = await bookingController.cancelBooking(req);
    return successResponse(res, 200, "", result)
  } catch (error) {
    throw error;
  }
});

module.exports = router;
