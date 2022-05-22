import React, { useState } from "react";

//Components
import CocktailModal from "./CocktailModal";

//Icons
import StarRateIcon from "@mui/icons-material/StarRate";

//Styles
import "./Cocktail.css";

function Cocktail({ recipe }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="cocktail">
      <div className="cocktail__info">
        <p>{recipe.recipename}</p>
      </div>

      <div
        className="cocktail__imageContainer"
        onClick={() => setOpenModal(true)}
      >
        <img className="cocktail__image" src={recipe.image} alt="" />
        <table className="cocktail__ingredients">
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
          </tbody>
        </table>
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
