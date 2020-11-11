/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from "react";
import axios from "axios";
import BeerCard from "./BeerCard";
import "./beerList.css";

class BeerList extends React.Component {
  state = {
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

  render() {
    return (
      <div className="cardsGrid">
        {/* <button onClick={this.getBeers}>Click To Retreive</button> */}
        {this.state.beers.map((beer) => (
          <BeerCard {...beer} key={beer.id} />
        ))}
      </div>
    );
  }
}

export default BeerList;
