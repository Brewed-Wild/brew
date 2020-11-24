/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import "./beerCard.css";

function FontExample(props) {
  // eslint-disable-next-line camelcase
  const { name, image_url, tagline, description, abv, ibu, ebc } = props;

  return (
    <div className="cardContainer">
      <div className="product-img">
        <img src={image_url} height="60%" alt="" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{name} "Kanit" 28px weight 500</h1>
          <h2>{tagline} "Raleway" 15px letter-spacing: 0.1em</h2>
          <p>{description} "Cabin" 15px weight: lighter</p>
        </div>
        <div className="beerIndicators">
          <span>abv:{abv}"Do Hyeon" 16px</span>
          <span>ibu:{ibu}</span>
          <span>ebc:{ebc}</span>
        </div>
      </div>
    </div>
  );
}

export default FontExample;
