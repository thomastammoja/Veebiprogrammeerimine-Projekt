import React from "react";
import "./AlcoholicCocktail.css";
import { useStateValue } from "../StateProvider";

function AlcoholicCocktail() {
  const [{ recipes }, dispatch] = useStateValue();
  const [alcoholicRecipes, setAlcoholicRecipes] = useStateValues();

  return (
    <div className="alcoholicCocktail">
      <div className="alcoholicCocktail__coctails">
        {recipes.map((item) => (
          <div className="alcoholicCocktail__coctail">
            <Cocktail recipe={item} />
            <CocktailModal recipe={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlcoholicCocktail;
