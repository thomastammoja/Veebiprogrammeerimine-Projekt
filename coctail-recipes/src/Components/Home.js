import React, { useEffect, useState } from "react";
import "./Home.css";
import Cocktail from "./Cocktail";
import { useStateValue } from "../StateProvider";
import CocktailModal from "./CocktailModal";

const Home = () => {
  const [{ recipes }, dispatch] = useStateValue();

  const getAllRecipes = async () => {
    try {
      const response = await fetch("http://localhost:8000/getAllRecipes");
      const jsonData = await response.json();

      dispatch({
        type: "EMPTY_DATA_LAYER",
      });

      jsonData.map((s) =>
        dispatch({
          type: "ADD_RECIPE",
          item: {
            id: s.id,
            name: s.recipename,
            image: s.image,
            rating: s.rating,
            instructions: s.instructions,
            icetype: s.icetype,
            glassware: s.glassware,
            ingredient1: s.ingredient1,
            measure1: s.measure1,
            ingredienttype1: s.ingredienttype1,
            ingredient2: s.ingredient2,
            measure2: s.measure2,
            ingredienttype2: s.ingredienttype2,
            ingredient3: s.ingredient3,
            measure3: s.measure3,
            ingredienttype3: s.ingredienttype3,
            ingredient4: s.ingredient4,
            measure4: s.measure4,
            ingredienttype4: s.ingredienttype4,
            ingredient5: s.ingredient5,
            measure5: s.measure5,
            ingredienttype5: s.ingredienttype5,
            ingredient6: s.ingredient6,
            measure6: s.measure6,
            ingredienttype6: s.ingredienttype6,
            ingredient7: s.ingredient7,
            measure7: s.measure7,
            ingredienttype7: s.ingredienttype7,
            ingredient8: s.ingredient8,
            measure8: s.measure8,
            ingredienttype8: s.ingredienttype8,
            ingredient9: s.ingredient9,
            measure9: s.measure9,
            ingredienttype9: s.ingredienttype9,
            ingredient10: s.ingredient10,
            measure10: s.measure10,
            ingredienttype10: s.ingredienttype10,
            recipeid: s.recipeid,
            includesalcohol: s.includesalcohol,
            includesvodka: s.includesvodka,
            includesliquer: s.includesliquer,
            includesgin: s.includesgin,
            includesrum: s.includesrum,
            includesvermut: s.includesvermut,
            includeswhiskey: s.includeswhiskey,
            includestequila: s.includestequila,
            includescognac: s.includescognac,
            includesbrandy: s.includesbrandy,
            includeschampagne: s.includeschampagne,
            includesbeer: s.includesbeer,
            includesaperative: s.includesaperative,
          },
        })
      );

      console.log("Those are the recipes >>> ", recipes);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (recipes?.length === 0) {
      getAllRecipes();
    }
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/12/cocktails-promo.jpg"
          alt=""
        />
        <div className="home__cocktails">
          {recipes.map((item) => (
            <div className="home__cocktail">
              <Cocktail recipe={item} />
              <CocktailModal recipe={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
