import React, { useState, useEffect } from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";

import CocktailModal from "./CocktailModal";
import "./Shuffle.css";

function Shuffle({ theme }) {
  const [randomRecipe, setRandomRecipe] = useState(() => []);
  const [openModal, setOpenModal] = useState(false);

  const getRandomRecipe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/getRandomRecipe");
      const jsonData = await response.json();

      setRandomRecipe(jsonData);
      setOpenModal(true);

      console.log("JsonData >>>", jsonData[0].id);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="shuffle">
      <a href="" onClick={(e) => getRandomRecipe(e)}>
        <ShuffleIcon
          className={theme === "dark" ? "shuffle__dark" : "shuffle__light"}
        />
      </a>
      <CocktailModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        recipe={randomRecipe[0]}
        className="shuffle__modal"
        showShuffle={true}
      />
    </div>
  );
}

export default Shuffle;
