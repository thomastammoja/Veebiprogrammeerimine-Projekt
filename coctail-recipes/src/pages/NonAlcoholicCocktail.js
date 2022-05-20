import React, { useEffect, useState } from "react";
import "./NonAlcoholicCocktail.css";
import Cocktail from "../components/Cocktail";
import CocktailModal from "../components/CocktailModal";

const NonAlcoholicCocktail = () => {
  const [recipes, setRecipes] = useState([]);

  const getAllNonAlcoholicRecipes = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/getAllNonAlcoholicRecipes"
      );
      const jsonData = await response.json();
      setRecipes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllNonAlcoholicRecipes();
  }, []);

  console.log(recipes);
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
