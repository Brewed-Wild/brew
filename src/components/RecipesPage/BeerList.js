/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import SearchBar from './SearchBar';
// import { Slider } from "shards-react";

import './beerList.css';



class BeerList extends React.Component {
  state = {
    greaterThanAbv: 0,

    greaterThanIbu: 0,

    greaterThanEbc: 0,

    beers: [],

   
  }

  componentDidMount() {
    this.getBeers();
  }

getBeers = () => {
  axios.get('https://api.punkapi.com/v2/beers')
    .then((response) => this.setState({ beers: response.data }));
}

getBeersSearch = (event) => {
 
  const { name, value } = event.target;
  this.setState({ [name]: value });
  
}

render() {
  return (
    <div>
      <div>
        <label>Abv</label>
        <input
          type="range"
          id="Abv"
          name="greaterThanAbv"
          min="0"
          max="20"
          onChange={(event) => this.getBeersSearch(event)}
          value={this.state.greaterThanAbv}
        />
      </div>
      <div>
        <label>Ibu</label>
        <input
          type="range"
          id="Ibu"
          name="greaterThanIbu"
          min="0"
          max="100"
          onChange={(event) => this.getBeersSearch(event)}
          value={this.state.greaterThanIbu}
        />
      </div>
      <div>
        <label>Ebc</label>
        <input
          type="range"
          id="Ebc"
          name="greaterThanEbc"
          min="0"
          max="300"
          onChange={(event) => this.getBeersSearch(event)}
          value={this.state.greaterThanEbc}
        />
      </div>
      <div>
        {this.state.beers.filter(beer => (
          beer.abv > this.state.greaterThanAbv && beer.ibu > this.state.greaterThanIbu && beer.ebc > this.state.greaterThanEbc)).map((beer) => (
            <div className="Card">
              <BeerCard {...beer} key={beer.id} />
            </div>
          ))}
        
      </div>
    </div>
  );
}
}
export default BeerList;