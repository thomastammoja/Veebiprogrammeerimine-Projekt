import React, { useEffect, useState } from "react";
import "./NonAlcoholicCocktail.css";
import Cocktail from "../components/Cocktail";
import CocktailModal from "../components/CocktailModal";
import { useSelector } from "react-redux";

const NonAlcoholicCocktail = () => {
  const recipes = useSelector((state) => state.recipes.allRecipes).filter(
    (i) => i.includesalcohol === 0
  );

  return (
    <div className="nonAlcoholicCocktail">
      <div className="nonAlcoholicCocktail__cocktails">
        {recipes.map((item) => (
          <div key={item.id} className="nonAlcoholicCocktail__cocktail">
            <Cocktail recipe={item} />
            <CocktailModal recipe={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonAlcoholicCocktail;
