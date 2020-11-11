/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import "./beerCard.css";

function BeerCard(props) {
  // eslint-disable-next-line camelcase
  const { name, image_url, tagline, description, abv, ibu, ebc } = props;

  return (
    <div className="card mb-3 d-flex p-2">
      <div className="row no-gutters">
        <div className="col-md-4 justify-content-start">
          <img
            src={image_url}
            className="d-flex justify-content-start"
            // width="100%"
            height="100%"
            alt=""
          />
        </div>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{tagline}</h6>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              {abv}
              {ibu}
              {ebc}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BeerCard;

<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <svg
        class="bd-placeholder-img"
        width="100%"
        height="250"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Placeholder: Image"
        preserveAspectRatio="xMidYMid slice"
        role="img"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96" />
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
          Image
        </text>
      </svg>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          It's a broader card with text below as a natural lead-in to extra
          content. This content is a little longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>;
