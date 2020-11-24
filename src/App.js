/* eslint-disable quotes */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import BeerList from "./components/RecipesPage/BeerList";
import About from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
// import BeerFilters from './components/RecipesPage/BeerList';
// import FontExample from './components/RecipesPage/FontExample';
import BeerSearchProvider from "./contexts/BeerSearch";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BeerSearchProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/beerlist" component={BeerList} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </BeerSearchProvider>
    );
  }
}

export default App;
