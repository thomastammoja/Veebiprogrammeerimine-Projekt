const initialState = {
  allRecipes: [],
  includesAlcohol: [],
};

const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return {
        ...state,
        allRecipes: action.payload,
      };
    case "FILTER_RECIPES_ALCOHOLIC":
      return {
        ...state,
        includesAlcohol: action.payload,
      };
    case "SHOW_RANDOM":
      return state.findIndex(action.id);
    default:
      return state;
  }
};

export default RecipesReducer;
