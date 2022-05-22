import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import AllReducers from "./reducers/AllReducers";
import { FetchRecipes, FilterByAlcohol } from "./actions/RecipesActions";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  AllReducers,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(FetchRecipes());
console.log("FETCHING");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
