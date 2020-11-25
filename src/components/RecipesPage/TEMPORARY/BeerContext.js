/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
// import Searchbar from "../Searchbar";
import React, { useState } from "react";
import { BeerSearch } from "./BeerSearch";
import BeerCard from "../components/RecipesPage/BeerCard";
import axios from "axios";
import "./beerList.css";

const BeerContext = (props) => {
  const BeerFilters = useContext(BeerSearch);
  const [] = useState([
    (beers: []),
    (abv: 10),
    (ibu: 20),
    (ebc: 40),
    (abvMin: 0),
    (abvMax: 10),
    (ibuMin: 0),
    (ibuMax: 100),
    (ebcMin: 0),
    (ebcMax: 200),
  ]);

  const [] = useState([]);

  useEffect(() => {
    getBeers();
  }, [BeerContext]);

  const getBeers = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers?abv_gt=${abvMin}&abv_lt${abvMax}`)
      .then((response) => this.setState({ beers: response.data }));
  };

  const handleChange = (event) => {
    const { abvMin, abvMax, ibuMin, ibuMax, ebcMin, ebcMax } = BeerContext;
    this.setState(
      {
        [event.target.name]: event.target.value,
        abvMin: this.state.abv * 0.8,
        abvMax: this.state.abv * 1.2,
        ibuMin: this.state.ibu * 0.8,
        ibuMax: this.state.ibu * 1.2,
        ebcMin: this.state.ebc * 0.8,
        ebcMax: this.state.ebc * 1.25,
      },
      () => {
        axios
          .get(
            `https://api.punkapi.com/v2/beers?abv_lt=${abvMax}&abv_gt=${abvMin}&ibu_lt=${ibuMax}&ibu_gt${ibuMin}&ebc_lt=${ebcMax}&ebc_gt${ebcMin}`
          )
          .then((response) => this.setState({ beers: response.data }));
      }
    );
  };

  return (
    <div>
      <h6>ABV</h6>
      <div class="slidecontainer">
        <input
          name="abv"
          type="range"
          min="1"
          max="20"
          value={this.state.abv}
          onChange={this.handleChange}
          class="slider"
          id="myRange"
        />
        <input
          name="ibu"
          type="range"
          min="1"
          max="100"
          value={this.state.ibu}
          onChange={this.handleChange}
          class="slider"
          id="myRange"
        />
        <input
          name="ebc"
          type="range"
          min="1"
          max="200"
          value={this.state.ebc}
          onChange={this.handleChange}
          class="slider"
          id="myRange"
        />
      </div>
      <div className="cardsGrid">
        {this.state.beers.map((beer) => (
          <div className="Card">
            <BeerCard {...beer} key={beer.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BeerFilters;
