import React from "react";
import { useSelector } from "react-redux";

//Components
import Cocktails from "../components/Cocktails";

const NonAlcoholicCocktail = () => {
  const recipes = useSelector((state) => state.allRecipes).filter(
    (i) => i.includesalcohol === 0
  );

  return <Cocktails recipes={recipes} />;
};

export default NonAlcoholicCocktail;
