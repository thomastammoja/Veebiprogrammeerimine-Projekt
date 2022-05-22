import React, { useState } from "react";
import "./Cocktail.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import CocktailModal from "./CocktailModal";

function Cocktail({ recipe }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="cocktail">
      <div className="cocktail__info">
        <p>{recipe.recipename}</p>
      </div>

      <img src={recipe.image} alt="" onClick={() => setOpenModal(true)} />

      <div className="cocktail__rating">
        <small>Hinnang:</small>
        {Array(recipe.rating)
          .fill()
          .map(() => (
            <StarRateIcon className="cocktail__ratingIcon" />
          ))}
      </div>
      {openModal && (
        <CocktailModal
          key={recipe.id}
          open={openModal}
          onClose={() => setOpenModal(false)}
          recipe={recipe}
          showShuffle={false}
        />
      )}
    </div>
  );
}

export default Cocktail;
