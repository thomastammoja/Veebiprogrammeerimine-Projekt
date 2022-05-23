import React from "react";

//Components
import Cocktail from "./Cocktail";
import CocktailModal from "./CocktailModal";

//Styles
import "./Cocktails.css";

function Cocktails({ recipes }) {
  return recipes.length === 0 ? (
    <div className="cocktails__notFound">Kokteile ei leitud!</div>
  ) : (
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
