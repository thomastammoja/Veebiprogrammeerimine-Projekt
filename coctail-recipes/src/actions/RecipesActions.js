import { FETCH_RECIPES } from "./types";

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
