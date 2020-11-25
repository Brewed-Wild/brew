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
      </Switch>
      <Footer />
    </div>
  );
  }
  
}

export default App;
