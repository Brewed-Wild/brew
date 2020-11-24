import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import BeerList from './components/RecipesPage/BeerList';
import About from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import './App.css';
import BeerFilters from './components/RecipesPage/BeerList';
import FontExample from "./components/RecipesPage/FontExample";

function App() {
  return (
    <div className="App">
      {/* <FontExample /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beerfilters" component={BeerFilters} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
