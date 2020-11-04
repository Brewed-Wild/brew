import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import BeerList from './components/RecipesPage/BeerList';
import About from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
