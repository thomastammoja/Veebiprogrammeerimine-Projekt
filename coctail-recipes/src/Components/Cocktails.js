import React from "react";

//Components
import Cocktail from "./Cocktail";
import CocktailModal from "./CocktailModal";

//Styles
import "./Cocktails.css";

function Cocktails({ recipes }) {
  if (!recipes) return null;
  return (
    <div className="cocktails">
      <div className="cocktails__container">
        <div className="cocktails__cocktailsList">
          {recipes.map((item) => (
            <div key={item.id} className="cocktails__singleCocktail">
              <Cocktail recipe={item} />
              <CocktailModal recipe={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cocktails;
