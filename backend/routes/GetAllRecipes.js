const express = require("express");
const pool = require("../db");

module.exports = function (app) {
  app.get("/getAllRecipes", async (req, res) => {
    app.use(express.json());

    try {
      res.set("Access-Control-Allow-Origin", "*");

      const allRecipes = await pool.query(
        "SELECT * FROM coctails.v_allRecipes"
      );

      res.json(allRecipes.rows);
    } catch (err) {
      console.log(err.message);
    }
  });
};
