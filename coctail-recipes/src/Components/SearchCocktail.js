import React from "react";
import "./SearchCocktail.css";
import Cocktail from "./Cocktail";

function SearchCocktail() {
  return (
    <div className="searchCocktail">
      <div className="searchCocktail__container">
        <div className="searchCocktail__row">
          <Cocktail
            image="https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg"
            name="Mojito"
            rating={5}
          />
          <Cocktail
            image="https://www.seriouseats.com/thmb/PIVqgfUtdn74p6KurPXlrNwlxKs=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__04__20150323-cocktails-vicky-wasik-margarita-c84b154e757d43688de15dc8f8ca0de9.jpg"
            name="Margarita"
            rating={4}
          />
          <Cocktail
            image="https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg"
            name="Mojito"
            rating={5}
          />
        </div>

        <div className="searchCocktail__row">
          <Cocktail
            image="https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg"
            name="Mojito"
            rating={5}
          />
          <Cocktail
            image="https://www.seriouseats.com/thmb/PIVqgfUtdn74p6KurPXlrNwlxKs=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__04__20150323-cocktails-vicky-wasik-margarita-c84b154e757d43688de15dc8f8ca0de9.jpg"
            name="Margarita"
            rating={4}
          />
          <Cocktail
            image="https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg"
            name="Mojito"
            rating={5}
          />
        </div>

        <div className="searchCocktail__row">
          <Cocktail
            image="https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg"
            name="Mojito"
            rating={5}
          />
          <Cocktail
            image="https://www.seriouseats.com/thmb/PIVqgfUtdn74p6KurPXlrNwlxKs=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__04__20150323-cocktails-vicky-wasik-margarita-c84b154e757d43688de15dc8f8ca0de9.jpg"
            name="Margarita"
            rating={4}
          />
          <Cocktail
            image="https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg"
            name="Mojito"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchCocktail;
