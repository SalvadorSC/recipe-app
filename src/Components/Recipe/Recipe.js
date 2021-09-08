import PropTypes from "prop-types";
import React, { useState } from "react";
import "./Recipe.css";

const Recipe = ({ recipe }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  return (
    <>
      <div className="recipe-card">
        <p>{recipe.name}</p>
        {showIngredients && <p>{recipe.ingredients}</p>}
        <button
          className="button-show-ingredients"
          onClick={() => setShowIngredients(!showIngredients)}
        >
          {showIngredients ? "Don't show ingredients" : "Show ingredients"}
        </button>
      </div>
    </>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    ingredients: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Recipe;
