const { Films } = require("../models/index");

module.exports = class FilmsController {
  async getFilmsList(req) {
    try {
      const listFilms = await Films.findAll();
      const data = JSON.parse(JSON.stringify(listFilms, null, 2));
      return data;
    } catch (error) {
      throw error;
    }
  }
}
