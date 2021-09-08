import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./RecipeForm.css";
import RecipesContext from "../../context/RecipesContext";
import { useSubmitData } from "../../hooks/useSubmitData/useSubmitData";
import { recipeFormValidator } from "./recipeFormValidator";
const RecipeForm = () => {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { submitNewdata, changeNewDataValue, errors } = useSubmitData(
    recipes,
    setRecipes,
    recipeFormValidator
  );
  return (
    <>
      <div className="recipe-form">
        <form action="">
          <label id="name-label">Recipe Name:</label> <br />
          <input
            type="text"
            className="text-input"
            id="name"
            name="name"
            placeholder="Enter the recipe's name"
            onChange={changeNewDataValue}
          />
          <label id="name-label">Recipe Ingredients:</label> <br />
          <input
            type="text"
            className="text-input"
            id="ingredients"
            name="ingredients"
            placeholder="Enter the recipe's ingredients"
            onChange={changeNewDataValue}
          />
          <button
            className="submit-recipe-button"
            onClick={submitNewdata}
            /* disabled={this.name.length < 1} */
          >
            Subir Receta
          </button>
        </form>
        {errors.name && <p className="errors-p">"Error en el nombre"</p>}
        {errors.ingredients && (
          <p className="errors-p">"Error en los ingredientes"</p>
        )}
      </div>
    </>
  );
};

recipeFormValidator.propTypes = {
  showForm: PropTypes.bool,
  recipes: PropTypes.object,
};

export default RecipeForm;
