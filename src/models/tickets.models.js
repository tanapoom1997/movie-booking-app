const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db-conection");

const Movies = sequelize.define(
  "Tickets",
  {
    ticketId: {
      type: DataTypes.INTEGER,
      field: "ticket_id",
      primaryKey: true,
    },
    movieId: {
      type: DataTypes.INTEGER,
      field: "movie_id",
    },
    timeBooking: {
      type: DataTypes.STRING,
      field: "time_booking",
    },
  },
  {
    modelName: "tickets",
    tableName: "tickets",
    sequelize,
  }
);

module.exports = Movies;
