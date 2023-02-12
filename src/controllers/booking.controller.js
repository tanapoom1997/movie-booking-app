const { Booking } = require("../models");
const { successResponse } = require("../utils");

module.exports = class BookingController {
  async insertBooking(req) {
    try {
      const result = await Booking.create({
        screeningId: req.body.screening_id,
      });
      if (result) return { bookingId: result };
      else return {};
    } catch (error) {
      throw error;
    }
  }
  async cancelBooking(req) {
    try {
      await Booking.destroy({
        where: {
            bookingId: req.body.booking_id
        },
      });
      return;
    } catch (error) {
      throw error;
    }
  }
};
