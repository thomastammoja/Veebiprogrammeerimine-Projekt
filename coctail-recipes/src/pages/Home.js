import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Components
import Banner from "../components/Banner";
import Cocktails from "../components/Cocktails";

//Styles
import "./Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState(
    useSelector((state) => state.allRecipes)
  );
  const filters = useSelector((state) => state.typeFilters);

  function filterRecipes(rec) {
    return filters.length > 0
      ? rec.filter((row) => filters?.some((column) => row[column] === 1))
      : rec;
  }

  return (
    <div className="home">
      <Banner className="home__image" />
      <div className="home__cocktails">
        <Cocktails recipes={filterRecipes(recipes)} />
      </div>
    </div>
  );
};

export default Home;
