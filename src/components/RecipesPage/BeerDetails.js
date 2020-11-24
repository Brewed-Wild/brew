import React from 'react';
import axios from 'axios';
import './beerdetails.css';

const BeerDetails = (props) => {
  const params = props.match.params;
  const [currentBeer, setCurrentBeer] = React.useState({});

  const getBeer = () => {
    axios.get(`https://api.punkapi.com/v2/beers/${params.id}`)
    .then(response => setCurrentBeer(response.data[0]))
  }

  React.useEffect (()=>{
    getBeer()
    console.log(currentBeer)
  },[params.id])

  
  return(
    <div className="beer-details mt-5">
      <div className='beer-titles'>
      <h1>{currentBeer.name}</h1>
      <h4>{currentBeer.tagline}</h4>
      </div>
      <div className="beer-values">
        <span>abv:{currentBeer.abv}</span>
        <span>ibu:{currentBeer.ibu}</span>
        <span>ebc:{currentBeer.ebc}</span>
      </div>
      <img className="product-image" src={currentBeer.image_url} alt={currentBeer.name} />
      <p className="details-text">
        <p>{currentBeer.description}</p>
        {/* <span>{currentBeer.ingredients.hops&& currentBeer.ingredients.hops.map((hop) => (<span>{hop.name}</span>))}</span> */}
        <span> Goes well with 
          {currentBeer.food_pairing&& currentBeer.food_pairing.map((food) => (
            <span> {food.toLowerCase()}, </span>
          ))}
          and similar foods.
        </span>
      </p>

    </div>
  )
}

export default BeerDetails;