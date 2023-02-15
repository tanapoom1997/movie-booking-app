const { padStart } = require("lodash");
const { Booking, ReservedSeats } = require("../models");
const { successResponse } = require("../utils");

module.exports = class BookingController {
  async insertBooking(req) {
    try {
      const resultBooking = await Booking.create({
        screeningId: req.body.screening_id,
      });
      if (resultBooking.dataValues.bookingId) {
        await ReservedSeats.create({
          bookingId: resultBooking.dataValues.bookingId,
          seatId: req.body.seat_id,
        });
        return { bookingId: resultBooking.dataValues.bookingId };
      } else {
        return {};
      }
    } catch (error) {
      throw error;
    }
  }
  async cancelBooking(req) {
    try {
      await Booking.destroy({
        where: {
          bookingId: req.body.booking_id,
        },
      });
      await ReservedSeats.destroy({
        where: {
          bookingId: req.body.booking_id,
        }
      })
      return;
    } catch (error) {
      throw error;
    }
  }
};
