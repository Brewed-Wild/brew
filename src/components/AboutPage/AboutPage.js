import React from "react";
import { useHistory } from "react-router-dom";
import "./AboutPage.css";

function About() {
  const history = useHistory();
  const redirect = () => {
    history.push("/beerlist");
  };

  return (
    <div className="container-sm" id="cardsContainer">
      <div className="col-sm-10 mx-auto">
        <h2 id="titleAboutUs" className=" font-weight-bold text-center">
          About Us
        </h2>
        <br />
        <div
          id="cardOne"
          className="ourStoryContainer col-sm-12 text-justify p-5 my-5"
        >
          <h5 className=" font-weight-bold my-2 "> Our Story </h5>
          <p className="mb-4">
            Brewer's Heaven was born in 2015 with a simple idea in mind:
            facilitate the access to full-ﬂavoured and forward-thinking beers to
            as many people as possible. We’re committed to building the ideal
            place to go to get our daily fix of brewing tips.
          </p>
          <img
            src="https://images.unsplash.com/photo-1567579518027-7a113279f8ce?ixlib=
          rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
            className="img-fluid"
            alt=""
          />
        </div>

        <div
          id="cardTwo"
          className="ourApproachContainer col-sm-12 text-justify p-5 my-5"
        >
          <h5 className=" font-weight-bold my-2"> Our Approach To Beer </h5>
          <p className=" mb-4 ">
            Our philosophy is to inform about the vast universe of craft beers
            and help our community grow! We believe that beer is still vastly
            underestimated and that there's a beer for everyone, a whole host of
            aromas, flavours, colours and textures to enjoy. Our mission is to
            get everyone on that journey of discovery. Whether you are a
            beginner or a seasoned brewer we aim to help you make the best beer
            possible.
          </p>
          <img
            src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&ixid=
            eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            className="img-fluid"
            alt=""
          />
        </div>

        <div
          id="cardThree"
          className="endResultContainer col-sm-12 text-justify p-5 my-5"
        >
          <h5 className=" font-weight-bold my-2"> The End Result </h5>
          <p className="mb-4">
            Whether you fancy a fruity, hoppy pale ale on a hot sunny day or an
            unctuous, satisfying stout at the end of an evening - we've got you
            covered. Read on to discover some of the beers that await, or book a
            brewery tour to see where the magic happens.
          </p>
          <img
            src="https://images.unsplash.com/photo-1539097463168-fdc97aa4d984?ixlib=rb-1.2.
            1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1825&q=80"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="buttonContainer">
          <button
            id="buttonExploreOurBeers"
            className="btn-lg btn-info mx-auto"
            onClick={redirect}
          >
            EXPLORE OUR BEERS
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;
