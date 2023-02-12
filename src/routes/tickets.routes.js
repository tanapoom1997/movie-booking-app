const express = require("express");
const router = express.Router();
const TicketsController = require("../controllers/tickets.controller");
const ticketsController = new TicketsController();
const { successResponse } = require("../utils");

router.post("/booking-ticket", async (req, res) => {
  try {
    await ticketsController.insertBookingTicket(req);
    return successResponse(res, 'Insert booking ticket successfully.', {})
  } catch (error) {
    throw error;
  }
});

router.delete("/cancle-booking-ticket", async (req, res) => {
  try {
    await ticketsController.cancelBookingTicket(req);
    return successResponse(res, 'Cancel booking ticket successfully.', {})
  } catch (error) {
    throw error;
  }
});

module.exports = router;
