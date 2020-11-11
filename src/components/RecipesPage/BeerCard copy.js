/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import "./beerCard.css";

function BeerCard(props) {
  // eslint-disable-next-line camelcase
  const { name, image_url, description, abv, ibu, ebc } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          <img src={image_url} alt="" />
        </div>
        <div className="col-sm-7">
          <h1>{name}</h1>
          <h3>{description}</h3>
          <h4>{abv}</h4>
          <h4>{ibu}</h4>
          <h4>{ebc}</h4>
        </div>
        <a href="#" className="btn btn-primary btn-sm float-right" />
        Read More
      </div>
    </div>
  );
}

export default BeerCard;
