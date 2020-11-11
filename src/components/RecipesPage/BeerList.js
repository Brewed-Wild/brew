/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from "react";
import axios from "axios";
import BeerCard from "./BeerCard";
import "./beerList.css";

class BeerList extends React.Component {
  state = {
    beerRecipeSearchValue: "",
    beers: [],
  };

  componentDidMount() {
    this.getBeers();
  }

  getBeers = () => {
    axios
      .get("https://api.punkapi.com/v2/beers/")
      .then((response) => this.setState({ beers: response.data }));
    // console.log(response);
  };

  beerRecipeSearchHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
  };

  handleButtonClick = (event) => {
    console.log(event.target);
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="searchBar"
            onChange={this.beerRecipeSearchHandler}
          />
          <button type="submit"> submit </button>
        </form>
        <div className="cardsGrid">
          {this.state.beers
            .filter((item) =>
              item.name.includes(this.state.beerRecipeSearchValue)
            )
            .map((beer) => (
              <BeerCard {...beer} key={beer.id} />
            ))}
        </div>
      </section>
    );
  }
}

export default BeerList;
