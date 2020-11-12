/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import './BeerFilters.css';


export default class BeerFilters extends React.Component {
    state = {
      beers: [],
      abvMin: 0,
      abvMax: 20,
      ibuMin: 0,
      ibuMax: 40,
      ebcMin: 0,
      ebcMax: 80,
    }

    componentDidMount() {
      this.getBeers();
    }

    getBeers = () => {
      axios.get(`https://api.punkapi.com/v2/beers?abv_gt=${this.state.abvMin}&abv_lt${this.state.abvMax}`)
        .then((response) => this.setState({ beers: response.data }));
    }

    handleChange = (event) => {
      const { abvMin, abvMax, ibuMin, ibuMax, ebcMin, ebcMax } = this.state;
      this.setState({ [event.target.name]: event.target.value }, () => {
        axios.get(`https://api.punkapi.com/v2/beers?abv_lt=${abvMax}&abv_gt=${abvMin}&ibu_lt=${ibuMax}&ibu_gt${ibuMin}&ebc_lt=${ebcMax}&ebc_gt${ebcMin}`)
          .then((response) => this.setState({ beers: response.data }));
      })
    }

    render() {
      return (
        <div>
          <h6>ABV</h6>
          <div class="slidecontainer">
          <input name="abv" type="range" min="1" max="20" value={this.state.abvMax} class="slider" id="myRange" />
          </div>
          <input name="abvMin" type="text" onChange={this.handleChange} value={this.state.abvMin} placeholder="ABV min" className="abv-min" />
          <input name="abvMax" type="text" onChange={this.handleChange} value={this.state.abvMax} placeholder="ABV max" className="abv-max" />
          <h6>IBU</h6>
          <input name="ibuMin" type="text" onChange={this.handleChange} value={this.state.ibuMin} placeholder="ABV min" className="abv-min" />
          <input name="ibuMax" type="text" onChange={this.handleChange} value={this.state.ibuMax} placeholder="ABV max" className="abv-max" />
          <h6>EBC</h6>
          <input name="ebcMin" type="text" onChange={this.handleChange} value={this.state.ebcMin} placeholder="ABV min" className="abv-min" />
          <input name="ebcMax" type="text" onChange={this.handleChange} value={this.state.ebcMax} placeholder="ABV max" className="abv-max" />
          <hr />
          {this.state.beers.map((beer) => (
            <div className="Card">
              <BeerCard {...beer} key={beer.id} />
            </div>
          ))}

        </div>

      );
    }
}
