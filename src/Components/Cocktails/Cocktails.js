import React, { useEffect, useState } from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import "./Cocktails.css";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const getCocktails = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    );
    const data = await response.json();
    setCocktails(data);
  };

  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <>
      <div className="row cocktail-list m-auto">
        {cocktails.drinks &&
          cocktails.drinks.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
      </div>
    </>
  );
};

export default Cocktails;
