/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import axios from 'axios';
import Searchbar from '../Searchbar';
import BeerCard from './BeerCard';
import './beerList.css';



export default class BeerFilters extends React.Component {
  state = {
    beers: [],
    abv: 10,
    ibu: 20,
    ebc: 40,
    abvMin: 0,
    abvMax: 10,
    ibuMin: 0,
    ibuMax: 100,
    ebcMin: 0,
    ebcMax: 200,
  };

  componentDidMount() {
    this.getBeers();
  }

  getBeers = () => {
    axios
      .get(
        `https://api.punkapi.com/v2/beers?abv_gt=${this.state.abvMin}&abv_lt${this.state.abvMax}`
      )
      .then((response) => this.setState({ beers: response.data }));
  };

    handleChange = (event) => {
      const { abvMin, abvMax, ibuMin, ibuMax, ebcMin, ebcMax } = this.state;
      this.setState({ 
        [event.target.name]: event.target.value,
        abvMin: this.state.abv * .8,
        abvMax: this.state.abv * 1.2,
        ibuMin: this.state.ibu * .8,
        ibuMax: this.state.ibu * 1.2,
        ebcMin: this.state.ebc * .8,
        ebcMax: this.state.ebc * 1.25 
      },
        () => {
        axios.get(`https://api.punkapi.com/v2/beers?abv_lt=${abvMax}&abv_gt=${abvMin}&ibu_lt=${ibuMax}&ibu_gt${ibuMin}&ebc_lt=${ebcMax}&ebc_gt${ebcMin}`)
          .then((response) => this.setState({ beers: response.data }));
      }
    );
  };

    }

    render() {
      return (
        <div>
            <h6>ABV</h6>
            <div class="slidecontainer">
              <input name="abv" type="range" min="1" max="20" value={this.state.abv} onChange={this.handleChange} class="slider" id="myRange" />
              <input name="ibu" type="range" min="1" max="100" value={this.state.ibu} onChange={this.handleChange} class="slider" id="myRange" />
              <input name="ebc" type="range" min="1" max="200" value={this.state.ebc} onChange={this.handleChange} class="slider" id="myRange" />
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
    }
}
