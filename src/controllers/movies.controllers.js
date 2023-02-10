const { Movies } = require("../models/index");

class MoviesController {
  async getMoviesList(req) {
    try {
      const listMovies = await Movies.findAll();
      const data = JSON.parse(JSON.stringify(listMovies, null, 2));
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MoviesController;
