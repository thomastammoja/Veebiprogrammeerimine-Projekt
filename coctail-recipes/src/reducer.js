export const initialState = {
  recipes: [],
  alcoholicRecipes: [],
};

const getAlcoholicRecipes = (state, action) => {
  switch (action.type) {
    case "ADD_ALCOHOLIC":
      return null;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return {
        ...state,
        recipes: [...state.recipes, action.item],
      };
    case "EMPTY_DATA_LAYER":
      return {
        ...state,
        recipes: [],
      };
    default:
      return state;
  }
};

export default reducer;
