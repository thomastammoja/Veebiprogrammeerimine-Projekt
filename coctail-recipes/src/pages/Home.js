import React from "react";
import { useSelector } from "react-redux";

//Components
import Banner from "../components/Banner";
import Cocktails from "../components/Cocktails";

//Styles
import "./Home.css";

const Home = () => {
  const recipes = useSelector((state) => state.allRecipes);

  return (
    <div className="home">
      <Banner className="home__image" />
      <div className="home__cocktails">
        <Cocktails recipes={recipes} />
      </div>
    </div>
  );
};

export default Home;
