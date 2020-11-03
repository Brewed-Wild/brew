import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/HomePage/HomePage"
import BeerList from "./components/RecipesPage/BeerList"
import About from "./components/AboutPage/AboutPage"
import Footer from "./components/Footer/Footer"
import './App.css';
// import allBeers from './components/ApiFetch/ApiFetch';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beerList" component={BeerList} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    

  );
}

export default App;
