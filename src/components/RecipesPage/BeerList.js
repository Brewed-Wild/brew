
import React from "react";
import axios from "axios";
import BeerCard from "./BeerCard";

import "./beerList.css"

class BeerList extends React.Component{
    state = {
        beers: []
    }

    componentDidMount() {
        this.getBeers()
        
    }
    getBeers = () => {
        axios.get("https://api.punkapi.com/v2/beers/")
            .then(response => this.setState({ beers : response.data }))
    }

    render() {
    return (
        <div>
            {/* <button onClick={this.getBeers}>Click To Retreive</button> */}
            {this.state.beers.map(beer => (
                <div className="Card">
                <BeerCard {...beer} key={beer.id}/>
                </div>                      
            ))}
            
            
        </div>
        
    )
}
}

export default BeerList;