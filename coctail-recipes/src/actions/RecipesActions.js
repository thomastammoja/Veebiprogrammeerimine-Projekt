import { useSelector } from "react-redux";

import { FETCH_RECIPES, FILTER_RECIPES_ALCOHOLIC } from "./types";

export const FetchRecipes = () => {
  return async (dispatch) => {
    try {
      await fetch("http://localhost:8000/getAllRecipes")
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: FETCH_RECIPES,
            payload: data,
          });
        });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const FilterByAlcohol = (recipes, includesAlcohol) => (dispatch) => {
  return dispatch({
    type: FILTER_RECIPES_ALCOHOLIC,
    payload: recipes.filter((i) => i.includesalcohol === includesAlcohol),
  });
};
