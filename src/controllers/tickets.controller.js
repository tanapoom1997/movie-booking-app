const { Tickets } = require("../models/index");

class TicketsController {
  async insertBookingTicket(req) {
    try {
      await Tickets.create({ movieName: req.body.movie_name });
      return;
    } catch (error) {
      throw error;
    }
  }
  async cancelBookingTicket(req) {
    try {
      await Tickets.destroy({
        where: {
          ticketId: req.body.ticket_id,
        },
      });
      return;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TicketsController;
