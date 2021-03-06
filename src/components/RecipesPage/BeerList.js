/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/static-property-placement */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/sort-comp */
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BeerContext } from "../../contexts/BeerContext";
import BeerCard from "./BeerCard";
import "./beerList.css";

export default class BeerFilters extends React.Component {
  state = {
    beers: [],
    abv: 10,
    ibu: 20,
    ebc: 40,
    abvMin: 0,
    abvMax: 20,
    ibuMin: 0,
    ibuMax: 100,
    ebcMin: 0,
    ebcMax: 200,
  };

  componentDidMount() {
    this.getBeers();
  }

  componentDidUpdate(prevContext) {
    if (prevContext.searchField !== this.context.searchField) {
      this.context.searchField === "" ? this.getBeers() : this.getBeersByName();
    }
  }

  getBeersByName = () => {
    const { searchField } = this.context;
    axios
      .get(`https://api.punkapi.com/v2/beers?beer_name=${searchField}`)
      .then((response) => this.setState({ beers: response.data }));
  };

  handleChange = (event) => {
    const {
      abvMin, abvMax, ibuMin, ibuMax, ebcMin, ebcMax,
    } = this.state;
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
            `https://api.punkapi.com/v2/beers?abv_lt=${abvMax}&abv_gt=${abvMin}&ibu_lt=${ibuMax}&ibu_gt${ibuMin}&ebc_lt=${ebcMax}&ebc_gt${ebcMin}`,
          )
          .then((response) => this.setState({ beers: response.data }));
      },
    );
  };

  getBeers = () => {
    axios
      .get(
        `https://api.punkapi.com/v2/beers?abv_gt=${this.state.abvMin}&abv_lt${this.state.abvMax}`,
      )
      .then((response) => {
        this.setState({ beers: response.data, count: response.data.length });
      });
  };

  static contextType = BeerContext;

  render() {
    return (
      <div>
        <div className="slidecontainer">
          <div className="abvContainer">
            <label className="abvTitle" htmlFor="myRange">
              ABV - Alcohol by Volume
            </label>
            <span className="abvSpan">
              3%
              <input
                name="abv"
                type="range"
                min="1"
                max="20"
                value={this.state.abv}
                onChange={this.handleChange}
                className="slider"
                id="myRange1"
              />
              20%
            </span>
            <p className="abvNumber">{this.state.abv}</p>
          </div>
          <div className="ibuContainer">
            <label className="ibuTitle" htmlFor="myRange">
              IBU - Bitterness
            </label>
            <span className="ibuSpan">
              Low
              <input
                name="ibu"
                type="range"
                min="1"
                max="100"
                value={this.state.ibu}
                onChange={this.handleChange}
                className="slider"
                id="myRange2"
              />
              High
            </span>
            <p className="ibuNumber">{this.state.ibu}</p>
          </div>
          <div className="ebcContainer">
            <label className="ebcTitle" htmlFor="myRange">
              EBC - Color
            </label>
            <span className="ebcSpan">
              Pale
              <input
                name="ebc"
                type="range"
                min="1"
                max="200"
                value={this.state.ebc}
                onChange={this.handleChange}
                className="slider"
                id="myRange3"
              />
              Dark
            </span>
            <p className="ebcNumber">{this.state.ebc}</p>
          </div>
        </div>
        <h1 className="beerNumber">
          There are
          <em className="exactNumber">{this.state.beers.length}</em>
          beers matching your preferences
        </h1>
        <div className="cardsGrid">
          {this.state.beers.map((beer) => (
            <div key={beer.id} className="Card">
              <Link to={`./beers/${beer.id}`}>
                <BeerCard {...beer} key={beer.id} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
