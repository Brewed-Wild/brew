/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./HomePage.css";
import glasses3 from "../../Assets/glasses3.png";
import glasses1 from "../../Assets/glasses1.png";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval="5000"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={glasses3} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beer-tap-panoramic-david-lee-thompson.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={glasses1} alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="totalImage">
          <div className="card1">
            <p className="cardTitle">Workshop</p>
            <img
              className="img1"
              src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p className="cardText">
              Join Brewers Heaven Workshop on 07/12/2020 and learn all you need
              to know to produce your own incredible beer! <br></br>If your are
              interested just send us an email to reserve your place
            </p>
          </div>
          <div className="card2">
            <p className="cardTitle">Beer of the Week</p>
            <img
              className="img2"
              src="https://images.unsplash.com/photo-1507310951869-fe0941df4dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p className="cardText">
              This week the most voted beer by our clients was PUNK beer! If you
              didnt try yet, dont waste more time.
            </p>
          </div>
          <div className="card3">
            <p className="cardTitle">Receipe of the Week</p>
            <img
              className="img3"
              src="https://images.unsplash.com/photo-1571947221289-ed32f8faad61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p className="cardText">
              This week we invite you to try this Malt recipe, very simple but
              very tastfull in the end! What are you wainting to start?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
