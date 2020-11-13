/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import "./beerCard.css";

function BeerCard(props) {
  // eslint-disable-next-line camelcase
  const { name, image_url, tagline, description, abv, ibu, ebc } = props;

  return (
    <div className="cardContainer">
      <div className="product-img">
        <img src={image_url} height="60%" alt="" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{name}</h1>
          <h2>{tagline}</h2>
          <p>{description}</p>
        </div>
        <div className="beerIndicators">
          <span>abv:{abv}</span>
          <span>ibu:{ibu}</span>
          <span>ebc:{ebc}</span>
        </div>
      </div>
    </div>
  );
}

export default BeerCard;
