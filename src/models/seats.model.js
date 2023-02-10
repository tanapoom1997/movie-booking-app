const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db-conection");

const Movies = sequelize.define(
  "Seat",
  {
    seatId: {
      type: DataTypes.INTEGER,
      field: "seat_id",
      primaryKey: true
    },
    row: {
      type: DataTypes.INTEGER,
      field: "row",
    },
    number: {
      type: DataTypes.INTEGER,
      field: "number",
    },
  },
  {
    modelName: "movie",
    tableName: "movie",
    sequelize,
  }
);

module.exports = Movies;
