const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db-conection");

const Booking = sequelize.define(
  "Booking",
  {
    screeningId: {
      type: DataTypes.INTEGER,
      filed: "screening_id",
    },
  },
  {
    modelName: "booking",
    tableName: "booking",
    sequelize,
  }
);
