import React, { useState } from "react";
import "./Cocktail.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import CocktailModal from "./CocktailModal";

function Cocktail({ recipe }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="cocktail">
      <div className="cocktail__info">
        <p>{recipe.name}</p>
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
          open={openModal}
          onClose={() => setOpenModal(false)}
          recipe={recipe}
        />
      )}
    </div>
  );
}

export default Cocktail;
