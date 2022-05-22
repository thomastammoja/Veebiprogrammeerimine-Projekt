export const initialState = {
  recipes: [],
  alcohol: [],
  searchText: "",
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
    case "FETCH_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };
    case "SEARCH_RECIPE":
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
