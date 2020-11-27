import React from "react";
import { Switch, Route } from "react-router-dom";
import BeerSearchProvider from "./contexts/BeerSearch";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import BeerList from "./components/RecipesPage/BeerList";
import About from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import BeerDetails from "./components/RecipesPage/BeerDetails";
import "./App.css";

function App() {
  return (
    <BeerSearchProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/about" component={About} />
        <Route path="/beers/:id" component={BeerDetails} />
      </Switch>
      <Footer />
    </BeerSearchProvider>
  );
}
export default App;
