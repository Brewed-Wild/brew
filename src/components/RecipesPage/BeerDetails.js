import React from 'react';
import axios from 'axios';
import './beerdetails.css';
import {Link} from 'react-router-dom';

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
    <div className="beer-details mt-5 mb-5">
      <Link to="../beerlist">
        <p className="ml-4 h1"> &#x261C;</p>
      </Link>
      <div className='beer-titles '>
      <h1>{currentBeer.name}</h1>
      <h4 className="text-wrap">{currentBeer.tagline}</h4>
      </div>
      <div className="beer-values flex-column flex-xl-row mt-5">
        <span>abv:{currentBeer.abv}</span>
        <span>ibu:{currentBeer.ibu}</span>
        <span>ebc:{currentBeer.ebc}</span>
      </div>
      <img className="product-image" src={currentBeer.image_url} alt={currentBeer.name} />
      <p className="details-text">
        <p>{currentBeer.description}</p>
        {/* <span>{currentBeer.ingredients.hops&& currentBeer.ingredients.hops.map((hop) => (<span>{hop.name}</span>))}</span> */}
        <br /><em> Goes well with 
          {currentBeer.food_pairing&& currentBeer.food_pairing.map((food) => (
            <span> {food.toLowerCase()}, </span>
          ))}
          and similar foods.
        </em>
      </p>

    </div>
  )
}

export default BeerDetails;