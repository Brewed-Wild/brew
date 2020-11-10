/* eslint-disable react/prop-types */
import React from 'react';

function BeerCard(props) {
  const { name, imageUrl } = props;
  return (
    <div>
      <h1>{name}</h1>
      <img className="imgBeer" src={imageUrl} alt="" />
    </div>
  );
}

export default BeerCard;
