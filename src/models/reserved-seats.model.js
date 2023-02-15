const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db-conection");

const ReservedSeats = sequelize.define(
  "ReservedSeats",
  {
    reservedSeatId: {
      type: DataTypes.INTEGER,
      field: "reserved_seat_id",
      primaryKey: true,
      autoIncrement: true,
    },
    bookingId: {
      type: DataTypes.INTEGER,
      field: "booking_id",
    },
    seatId: {
      type: DataTypes.INTEGER,
      field: "seat_id",
    },
  },
  {
    modelName: "reserved_seats",
    tableName: "reserved_seats",
    sequelize,
  }
);

module.exports = ReservedSeats;
