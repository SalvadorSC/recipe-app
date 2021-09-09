import React, { createContext, useState } from "react";

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    { name: "Carbonara", ingredients: ["Pasta", "bacon"] },
  ]);
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
