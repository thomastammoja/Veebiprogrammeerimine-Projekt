import { combineReducers } from "redux";
import RecipesReducer from "./RecipesReducer";

const AllReducers = combineReducers({
  recipes: RecipesReducer,
});

export default AllReducers;
