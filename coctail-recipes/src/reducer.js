const initialState = {
  allRecipes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return {
        ...state,
        allRecipes: action.recipes,
      };
    default:
      return state;
  }
};

export default reducer;
