const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../db-conection");

const Films = sequelize.define(
  "Films",
  {
    filmId: {
      type: DataTypes.INTEGER,
      field: "film_id",
      primaryKey: true,
    },
    filmName: {
      type: DataTypes.STRING,
      field: "film_name",
    },
    lengthMin: {
      type: DataTypes.INTEGER,
      field: "length_min",
    },
    description: {
      type: DataTypes.TEXT,
      field: "description",
    },
  },
  {
    modelName: "films",
    tableName: "films",
    sequelize,
  }
);

module.exports = Films;
