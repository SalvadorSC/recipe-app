// Dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Componentes
import Cocktails from "./Components/Cocktails/Cocktails";
import RecipeForm from "./Components/RecipeForm/RecipeForm";
import RecipeList from "./Components/RecipeList/RecipeList";
import CocktailDetails from "./Components/CocktailDetails/CocktailDetails";
// Context
import { RecipesProvider } from "./context/RecipesContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <Link to="/">Recipe List</Link>
          </li>
          <li>
            <Link to="/recipe-form">Recipe Form</Link>
          </li>
          <li>
            <Link to="/cocktails">Cocktails</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <RecipesProvider>
              <RecipeList />
            </RecipesProvider>
          </Route>
          <Route path="/recipe-form">
            <RecipesProvider>
              <RecipeForm />
            </RecipesProvider>
          </Route>
          <Route exact path="/cocktails">
            <Cocktails />
          </Route>
          <Route path="/cocktails/:id">
            <CocktailDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
