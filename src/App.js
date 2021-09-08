import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cocktails from "./Components/Cocktails/Cocktails";
import RecipeForm from "./Components/RecipeForm/RecipeForm";
import RecipeList from "./Components/RecipeList/RecipeList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CocktailDetails from "./Components/CocktailDetails/CocktailDetails";
import { RecipesProvider } from "./context/RecipesContext";

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
