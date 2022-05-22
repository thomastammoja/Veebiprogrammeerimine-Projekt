import React from "react";
import { useSelector } from "react-redux";

//Components
import Cocktail from "../components/Cocktail";
import CocktailModal from "../components/CocktailModal";
import Banner from "../components/Banner";

//Styles
import "./Home.css";

const Home = () => {
  const recipes = useSelector((state) => state.recipes.allRecipes);

  return (
    <div className="home">
      <div className="home__container">
        <Banner className="home__image" />
        <div className="home__cocktails">
          {recipes.map((item) => (
            <div key={item.id} className="home__cocktail">
              <Cocktail recipe={item} />
              <CocktailModal recipe={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
