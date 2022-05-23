import { FETCH_RECIPES, UPDATE_ACTIVE_FILTERS } from "./types";

export const FetchRecipes = () => {
  return async (dispatch) => {
    try {
      await fetch("http://localhost:8000/getAllRecipes")
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: FETCH_RECIPES,
            recipes: data,
          });
        });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const UpdateActiveFilters = (columns) => {
  console.log("COLUMNS >>>", columns);
  return (dispatch) => {
    dispatch({
      type: UPDATE_ACTIVE_FILTERS,
      typeFilters: columns,
    });
  };
};
