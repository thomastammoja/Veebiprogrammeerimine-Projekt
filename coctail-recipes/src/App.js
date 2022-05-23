import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchCocktail from "./pages/SearchCocktail";
import AlcoholicCocktail from "./pages/AlcoholicCocktail";
import NonAlcoholicCocktail from "./pages/NonAlcoholicCocktail";

//Styles
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/alcohol" element={<AlcoholicCocktail />} />
          <Route path="/nonalcohol" element={<NonAlcoholicCocktail />} />
          <Route
            path="/searchCocktail/:searchQuery"
            element={<SearchCocktail />}
          />
          <Route path="/searchCocktail/" element={<Home />} />
          <Route path="/" element={[<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
