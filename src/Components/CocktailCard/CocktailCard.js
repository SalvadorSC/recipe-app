import PropTypes from "prop-types";
import React from "react";
import "./CocktailCard.css";
import { useHistory } from "react-router-dom";

const CocktailCard = ({ cocktail }) => {
  let history = useHistory();
  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="cocktail-card ">
          <p className="cocktail-card-name">{cocktail.strDrink}</p>
          <img
            className="cocktail-img"
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            onClick={() => history.push(`/cocktails/${cocktail.idDrink}`)}
          />
        </div>
      </div>
    </>
  );
};

CocktailCard.propTypes = {
  cocktail: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }),
};

export default CocktailCard;
