import React, { useState } from "react";
import { useSelector } from "react-redux";

//Components
import CocktailModal from "./CocktailModal";

//Icons
import ShuffleIcon from "@mui/icons-material/Shuffle";

//Styles
import "./Shuffle.css";

function Shuffle({ theme }) {
  const [randomRecipeId, setRandomRecipeId] = useState();
  const [openModal, setOpenModal] = useState(false);

  const getRandomRecipe = async (e) => {
    e.preventDefault();

    const MIN_VALUE = 1;
    const MAX_VALUE = 62;
    setRandomRecipeId(
      Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE) + MIN_VALUE)
    );

    setOpenModal(true);
  };

  const randomRecipe = useSelector((state) => state.allRecipes).filter(
    (i) => i.id === randomRecipeId
  );

  return (
    <div className="shuffle">
      <a href="" onClick={(e) => getRandomRecipe(e)}>
        <ShuffleIcon
          className={theme === "dark" ? "shuffle__dark" : "shuffle__light"}
        />
      </a>
      <CocktailModal
        key={randomRecipe.id}
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
