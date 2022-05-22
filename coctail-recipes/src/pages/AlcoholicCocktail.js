import React, { useEffect, useState } from "react";
import "./AlcoholicCocktail.css";
import Cocktail from "../components/Cocktail";
import CocktailModal from "../components/CocktailModal";
import { useSelector } from "react-redux";

const AlcoholicCocktail = () => {
  const recipes = useSelector((state) => state.recipes.allRecipes).filter(
    (i) => i.includesalcohol === 1
  );

  return (
    <div className="alcoholicCocktail">
      <div className="alcoholicCocktail__cocktails">
        {recipes.map((item) => (
          <div key={item.id} className="alcoholicCocktail__cocktail">
            <Cocktail recipe={item} />
            <CocktailModal recipe={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlcoholicCocktail;
