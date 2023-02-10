const express = require("express");
const router = express.Router();

router.get("/available-seats", async (req, res) => {
  try {
    const dataObject = {
      resCode: 200,
      message: "Success",
      getMoviesList,
    };
    res.send(dataObject).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

module.exports = router;
