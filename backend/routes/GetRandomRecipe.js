const express = require("express");
const pool = require("../db");

module.exports = function (app) {
  app.get("/getRandomRecipe", async (req, res) => {
    app.use(express.json());

    try {
      res.set("Access-Control-Allow-Origin", "*");

      const min = 1;
      const max = 62;
      const id = Math.floor(Math.random() * (max - min) + min);

      const randomRecipe = await pool.query(
        "SELECT * FROM coctails.v_allRecipes WHERE id = $1",
        [id]
      );
      res.json(randomRecipe.rows);
      console.log(randomRecipe.rows);
    } catch (err) {
      console.log(err.message);
    }
  });
};
