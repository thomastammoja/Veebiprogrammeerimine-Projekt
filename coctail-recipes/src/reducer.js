const initialState = {
  allRecipes: [],
  typeFilters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return {
        ...state,
        allRecipes: action.recipes,
      };
    case "UPDATE_ACTIVE_FILTERS":
      return {
        ...state,
        typeFilters: action.typeFilters,
      };
    default:
      return state;
  }
};

export default reducer;
