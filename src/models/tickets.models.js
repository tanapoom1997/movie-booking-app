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
    movieName: {
      type: DataTypes.STRING,
      field: "movie_name",
    },
  },
  {
    modelName: "tickets",
    tableName: "tickets",
    sequelize,
  }
);

module.exports = Movies;
