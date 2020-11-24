import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import BeerList from "./components/RecipesPage/BeerList";
import About from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import BeerFilters from "./components/RecipesPage/BeerList";
import FontExample from "./components/RecipesPage/FontExample";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar searchBeersApp={this.SetSearch}/> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/beerlist"
            component={BeerList}
            searchBeers={this.SetSearch}
          />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
