import React from "react";
import "./CocktailModal.css";

import StarRateIcon from "@mui/icons-material/StarRate";

function CocktailModal({ open, onClose, recipe }) {
  if (!open) return null;
  return (
    <div onClick={onClose} className="cocktailModal">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="cocktailModal__container"
      >
        <div className="cocktailModal__title">
          <h4>{recipe.name}</h4>
          <p onClick={onClose}>X</p>
        </div>

        <div className="cocktailModal__row">
          <div className="cocktailModal__columnLeft">
            <img src={recipe.image} alt="" />
            <div className="cocktailModal__rating">
              <small>Hinnang:</small>
              {Array(recipe.rating)
                .fill()
                .map(() => (
                  <StarRateIcon className="cocktailModal__ratingIcon" />
                ))}
            </div>
          </div>

          <div className="cocktailModal__columnRight">
            <table className="cocktailModal__ingredients">
              <thead>
                <tr>
                  <th>koostisosa</th>
                  <th>kogus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{recipe.ingredient1}</td>
                  <td>{recipe.measure1}</td>
                </tr>
                <tr>
                  <td>{recipe.ingredient2}</td>
                  <td>{recipe.measure2}</td>
                </tr>
                <tr>
                  <td>{recipe.ingredient3}</td>
                  <td>{recipe.measure3}</td>
                </tr>
                <tr>
                  <td>{recipe.ingredient4}</td>
                  <td>{recipe.measure4}</td>
                </tr>
                <tr>
                  <td>{recipe.ingredient5}</td>
                  <td>{recipe.measure5}</td>
                </tr>
                <tr>
                  <td>{recipe.ingredient6}</td>
                  <td>{recipe.measure6}</td>
                </tr>
                <tr>
                  <td>{recipe.ingredient7}</td>
                  <td>{recipe.measure7}</td>
                </tr>
                <tr>
                  <td>{recipe.ingredient8}</td>
                  <td>{recipe.measure8}</td>
                </tr>
                <tr>
                  <td>{recipe.ingredient9}</td>
                  <td>{recipe.measure9}</td>
                </tr>
                <tr>
                  <td>{recipe.ingredient10}</td>
                  <td>{recipe.measure10}</td>
                </tr>
                <tr>
                  <td>Jää {recipe.icetype}</td>
                </tr>
              </tbody>
            </table>

            <div className="cocktailModal__instructions">
              <h5>Juhised</h5>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailModal;
