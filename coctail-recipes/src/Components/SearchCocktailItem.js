import React from "react";

//Icons
import StarRateIcon from "@mui/icons-material/StarRate";

//Styles
import "./SearchCocktailItem.css";

function SearchCocktailItem({ id, image, info, rating }) {
  return (
    <div className="searchCocktail">
      <img src={image} alt="" />

      <div className="searchCocktail__info">
        <p>{info}</p>
      </div>

      <div className="searchCocktail__rating">
        <small>Hinnang:</small>
        {Array(rating)
          .fill()
          .map(() => (
            <StarRateIcon className="searchCocktail__ratingIcon" />
          ))}
      </div>
    </div>
  );
}

export default SearchCocktailItem;
