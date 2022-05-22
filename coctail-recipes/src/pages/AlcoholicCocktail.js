import React from "react";
import { useSelector } from "react-redux";

//Components
import Cocktail from "../components/Cocktail";
import CocktailModal from "../components/CocktailModal";

//Styles
import "./AlcoholicCocktail.css";

const AlcoholicCocktail = () => {
  const recipes = useSelector((state) => state.allRecipes).filter(
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
