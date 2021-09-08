import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CocktailDetails.css";

const CocktailDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [cocktail, setCocktail] = useState([]);
  const getCocktail = useCallback(async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(response);
    const data = await response.json();
    console.log(data.drinks[0]);

    setCocktail(data.drinks[0]);
  }, [id]);

  useEffect(() => {
    getCocktail();
  }, [getCocktail]);

  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 m-auto">
        <div className="cocktail-card ">
          <p className="cocktail-card-name">{cocktail.strDrink}</p>
          <img
            className="cocktail-img"
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
          />
        </div>
      </div>
    </>
  );
};

export default CocktailDetails;
