import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
        <div class="add-recipe-button-container">
          {/* <Link to="/recipe-form">
            <button className="add-recipe-button">Add recipe</button>
          </Link> */}
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

export default RecipeList;
