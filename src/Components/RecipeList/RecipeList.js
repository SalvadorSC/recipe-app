import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import RecipesContext from "../../context/RecipesContext";
import Recipe from "../Recipe/Recipe";
import RecipeForm from "../RecipeForm/RecipeForm";
import "./RecipeList.css";

const RecipeList = () => {
  const { recipes } = useContext(RecipesContext);
  const [showForm, setShowForm] = useState();
  return (
    <>
      <div className="recipe-list">
        <div className="add-recipe-button-container">
          <br />
          <button
            className="add-recipe-button"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "Add recipe"}
          </button>
        </div>
        {showForm && <RecipeForm />}
        {recipes.map((recipe) => (
          <Recipe key={recipe.name} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

RecipeList.propTypes = {
  showForm: PropTypes.bool,
  recipes: PropTypes.object,
};

export default RecipeList;
