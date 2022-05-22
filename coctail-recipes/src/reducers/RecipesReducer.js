const initialState = {
  allRecipes: [],
};

const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return {
        ...state,
        allRecipes: action.payload,
      };
  }
};

export default RecipesReducer;
