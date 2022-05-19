import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Home from "./Components/Home";
import SearchCocktail from "./Components/SearchCocktail";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/alcohol" />
          <Route path="/nonalcohol" />
          <Route path="/randomRecipe" />
          <Route path="/searchCocktail" element={<SearchCocktail />} />
          <Route path="/" element={[<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
