const { Tickets } = require("../models/index");

class TicketsController {
  async insertBookingTicket(req) {
    try {
      await Tickets.create({ ticketCode: req.body.ticket_code,
        movieId: req.body.movie_id,
        timeBooking: req.body.time_booking });
      return;
    } catch (error) {
      throw error;
    }
  }
  async cancelBookingTicket(req) {
    try {
      await Tickets.destroy({
        where: {
          ticketCode: req.body.ticket_code,
        },
      });
      return;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TicketsController;
