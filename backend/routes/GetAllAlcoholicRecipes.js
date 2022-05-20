const express = require("express");
const pool = require("../db");

module.exports = function (app) {
  app.get("/getAllAlcoholicRecipes", async (req, res) => {
    app.use(express.json());

    try {
      res.set("Access-Control-Allow-Origin", "*");

      const allRecipes = await pool.query(
        "SELECT * FROM coctails.v_allRecipes WHERE includesalcohol = 1"
      );

      res.json(allRecipes.rows);
    } catch (err) {
      console.log(err.message);
    }
  });
};
