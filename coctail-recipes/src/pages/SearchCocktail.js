import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//Components
import Cocktails from "../components/Cocktails";

const SearchCocktail = () => {
  const searchQuery = useParams().searchQuery;
  const allRecipes = useSelector((state) => state.allRecipes);

  function filterRecipes(rec) {
    return rec.filter(
      (row) =>
        row.recipename.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
        row.ingredient1?.toLowerCase().indexOf(searchQuery.toLowerCase()) >
          -1 ||
        row.ingredient2?.toLowerCase().indexOf(searchQuery.toLowerCase()) >
          -1 ||
        row.ingredient3?.toLowerCase().indexOf(searchQuery.toLowerCase()) >
          -1 ||
        row.ingredient4?.toLowerCase().indexOf(searchQuery.toLowerCase()) >
          -1 ||
        row.ingredient5?.toLowerCase().indexOf(searchQuery.toLowerCase()) >
          -1 ||
        row.ingredient6?.toLowerCase().indexOf(searchQuery.toLowerCase()) >
          -1 ||
        row.ingredient7?.toLowerCase().indexOf(searchQuery.toLowerCase()) >
          -1 ||
        row.ingredient8?.toLowerCase().indexOf(searchQuery.toLowerCase()) >
          -1 ||
        row.ingredient9?.toLowerCase().indexOf(searchQuery.toLowerCase()) >
          -1 ||
        row.ingredient10?.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
    );
  }

  return <Cocktails recipes={filterRecipes(allRecipes)} />;
};

export default SearchCocktail;
