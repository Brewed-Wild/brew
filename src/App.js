import React from "react";
import { Switch, Route } from "react-router-dom";
import BeerContextProvider from "./contexts/BeerContext";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
import BeerList from "./components/RecipesPage/BeerList";
import BeerDetails from "./components/RecipesPage/BeerDetails";
import "./App.css";

function App() {
  return (
    <BeerContextProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/about" component={About} />
        <Route path="/beers/:id" component={BeerDetails} />
      </Switch>
      <Footer />
    </BeerContextProvider>
  );
}
export default App;
