/* eslint-disable react/prop-types */
import React from 'react';

function BeerCard(props) {
  const { name, image_url } = props;
  return (
    <div>
      <h1>{name}</h1>
      <img src={image_url} alt="" />
    </div>
  );
}

export default BeerCard;
