import React from 'react';
import axios from 'axios';

const BeerDetails = (props) => {
  const params = props.match.params;
  const [currentBeer, setCurrentBeer] = React.useState({});

  const getBeer = () => {
    axios.get(`https://api.punkapi.com/v2/beers/${params.id}`)
    .then(response => setCurrentBeer(response.data[0]))
  }

  React.useEffect (()=>{
    getBeer()
    // console.log(currentBeer)
  },[])
  
  return(
    <div height="200px">
      {console.log(currentBeer.name)}
      <h1>{currentBeer.name}</h1>
      <img src={currentBeer.image_url} alt={currentBeer.name} />
      <p>
        <b>{currentBeer.description}</b>
        {/* <span>{currentBeer.ingredients.hops[0].name}</span> */}
      </p>

    </div>
  )
}

export default BeerDetails;