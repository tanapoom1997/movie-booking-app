const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db-conection");

const Movies = sequelize.define(
  "Movies",
  {
    movieId: {
      type: DataTypes.INTEGER,
      field: "movie_id",
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      field: "title",
    },
    showDate: {
      type: DataTypes.DATE,
      field: "show_time",
    },
  },
  {
    modelName: "movies",
    tableName: "movies",
    sequelize,
  }
);

module.exports = Movies;
