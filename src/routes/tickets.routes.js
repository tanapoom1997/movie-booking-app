const express = require("express");
const router = express.Router();

router.post("/booking-ticket", async (req, res) => {
  try {
    const insertMovie = await moviecontroller.insertBookingTicket(req);
    res.send(insertMovie).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

router.delete("/cancle-booking-ticket", async (req, res) => {
  try {
    const cancleTicket = await moviecontroller.cancelBookingTicket(req);
    res.send(cancleTicket).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

module.exports = router;
