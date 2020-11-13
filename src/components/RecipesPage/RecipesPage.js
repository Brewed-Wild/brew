import React from "react";
import "./RecipesPage.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import BeerCard from "./BeerCard";

class RecipesPage extends React.Component {
  render() {
    return (
      <div>
        <BeerCard />
      </div>
    );
  }
}

export default RecipesPage;
