import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import BeerList from './components/RecipesPage/BeerList';
import About from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import BeerDetails from "./components/RecipesPage/BeerDetails"
import './App.css';
import BeerFilters from './components/RecipesPage/BeerList';
import FontExample from "./components/RecipesPage/FontExample";

class App extends React.Component {
  state = {

  }

  SetSearch = (event) => {event.target.value;}


  render () {
    return (
    <div className="App">
      <Navbar searchBeersApp={this.SetSearch}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beerlist" component={BeerList} searchBeers={this.SetSearch} />
        <Route path="/about" component={About} />
        <Route path="/beers/:id" component={BeerDetails} />
      </Switch>
      <Footer />
    </div>
  );
  }
  
}

export default App;
