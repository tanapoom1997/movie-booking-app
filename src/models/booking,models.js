const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db-conection");

const Booking = sequelize.define(
  "Booking",
  {
    bookingId: {
      type: DataTypes.INTEGER,
      field: "booking_id",
      primaryKey: true,
      autoIncrement: true,
    },
    screeningId: {
      type: DataTypes.INTEGER,
      field: "screening_id",
    },
  },
  {
    modelName: "booking",
    tableName: "booking",
    sequelize,
  }
);

module.exports = Booking;
