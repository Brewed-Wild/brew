/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './HomePage.css';
import glasses3 from '../../Assets/glasses3.png';
import glasses1 from '../../Assets/glasses1.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [beerOfTheWeek, setBeerOfTheWeek] = React.useState({});

// Returns the ISO week of the date.
Date.prototype.getWeek = function() {
  let date = new Date();
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

  const getBeerOfTheWeek = () => {
    axios.get(`https://api.punkapi.com/v2/beers/${Date.prototype.getWeek()}`)
      .then((response) => setBeerOfTheWeek(response.data[0]));
  };

  React.useEffect(() => {
    getBeerOfTheWeek();
  }, []);

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={glasses3} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beer-tap-panoramic-david-lee-thompson.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={glasses1} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>

      </div>
      <div className="totalImage">
        <div className="card1">
          <p className="cardTitle">Workshop</p>
          <img className="img1" src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
          <p className="cardText">
            Join Brewers Heaven Workshop on 07/12/2020 and learn all you need to know to produce your own incredible beer!
            <br />
            If your are interested just send us an email to reserve your place!!
          </p>
        </div>
        <Link to={`./beers/${beerOfTheWeek.id}`} >
        <div className="card2 text-decoration-none">
          <p className="cardTitle text-nowrap">Beer of the Week</p>
          <img className="img2 ml-auto mr-auto" src={beerOfTheWeek.image_url} alt="" /> <br />
          <em className="cardText"> 
          <br />
            This week's top beer -<b>{beerOfTheWeek.name}</b> - goes well with 
            {beerOfTheWeek.food_pairing&& beerOfTheWeek.food_pairing.map((food) => (
              <span> {food.toLowerCase()}, </span>
            ))} and similar foods.
          </em>
        </div>
        </Link>
        <div className="card3">
          <p className="cardTitle">Receipe of the Week</p>
          <img className="img3" src="https://images.unsplash.com/photo-1571947221289-ed32f8faad61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
          <p className="cardText align-self-start">This week we invite you to try this Malt recipe, very simple but very tastfull in the end! What are you wainting to start?</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
