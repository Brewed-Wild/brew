/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import './beerList.css';

export default class BeerFilters extends React.Component {
    state = {
      beers: [],
      abvMin: 2,
      abvMax: 14,
    }

    componentDidMount() {
      this.getAbv();
    }
    componentDidUpdate() {
      this.getAbv
    }
    getAbv = () => {
      axios.get(`https://api.punkapi.com/v2/beers?abv_gt=${this.state.abvMin}&abv_lt${this.state.abvMax}`)
        .then((response) => this.setState({ beers: response.data }));
    }

    hadleChange = (event) => (
      this.setState({ [event.target.name]: event.target.value })
    )

    hadleSubmit = () => this.preventDefault()

    render() {
      return (
        <div>
          <form onSubmit={this.hadleSubmit}>
          <input name="abvMin" type="text" onChange={this.handleChange} placeholder="ABV min" className="abv-min" />
          <input name="abvMax" type="text" onChange={this.handleChange} placeholder="ABV max" className="abv-max" />
          <input name="submit" type="submit" placeholder="submit" className="submit" />
          </form>
          {this.state.beers.map((beer) => (
            <div className="Card">
              <BeerCard {...beer} key={beer.id} />
            </div>
          ))}

        </div>

      );
    }
}
