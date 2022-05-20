import React, { useEffect, useState } from "react";
import "./AlcoholicCocktail.css";
import Cocktail from "../components/Cocktail";
import CocktailModal from "../components/CocktailModal";

const AlcoholicCocktail = () => {
  const [recipes, setRecipes] = useState([]);

  const getAllAlcoholicRecipes = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/getAllAlcoholicRecipes"
      );
      const jsonData = await response.json();
      setRecipes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllAlcoholicRecipes();
  }, []);

  console.log(recipes);
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
