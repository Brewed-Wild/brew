<<<<<<< HEAD
/* eslint-disable quotes */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Switch, Route } from "react-router-dom";
import BeerSearchProvider from "./contexts/BeerSearch";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import BeerList from "./components/RecipesPage/BeerList";
import About from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
// import BeerFilters from './components/RecipesPage/BeerList';
// import FontExample from './components/RecipesPage/FontExample';
import "./App.css";
=======
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import BeerFilters from "./components/RecipesPage/BeerList";
import BeerList from "./components/RecipesPage/BeerList";
import "./App.css";
// import FontExample from "./components/RecipesPage/FontExample";
>>>>>>> 8c51c00f252f80ac09bfa50898b24bd51f6f564d

const App = (props) => {
  return (
    <BeerSearchProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/about" component={About} />
        {/* <Route path="/beers/:id" component={BeerDetails} /> */}
      </Switch>
      <Footer />
    </BeerSearchProvider>
  );
};
export default App;
