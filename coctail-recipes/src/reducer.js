export const initialState = {
  recipes: [],
  alcohol: [],
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
