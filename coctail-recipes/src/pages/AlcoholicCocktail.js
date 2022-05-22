import React from "react";
import { useSelector } from "react-redux";

//Components
import Cocktails from "../components/Cocktails";

const AlcoholicCocktail = () => {
  const recipes = useSelector((state) => state.allRecipes).filter(
    (i) => i.includesalcohol === 1
  );

  return <Cocktails recipes={recipes} />;
};

export default AlcoholicCocktail;
