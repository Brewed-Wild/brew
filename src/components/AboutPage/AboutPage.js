import React from 'react';
import { useHistory } from 'react-router-dom';
import './AboutPage.css';

function About() {
  const history = useHistory();
  const redirect = () => {
    history.push('/beerlist');
  };

  return (
    <div>
      <h2 className="my-5 font-weight-bold text-center">About Us</h2>
      <div className="col-sm-8 text-justify mb-5 mr-auto ml-auto">
        <div className="ourStoryContainer my-5">
          <h5 className="my-2 font-weight-bold">Our Story </h5>
          <p className="mb-4">
            Brewer's Heaven was born in 2015 with a simple idea in mind: facilitate the access to
            full-ﬂavoured and forward-thinking beers to as many people as possible. We’re committed
            to building the ideal place to go to get our daily fix of brewing tips.
          </p>
          <img
            src="https://images.unsplash.com/photo-1567579518027-7a113279f8ce?ixlib=
        rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>

        <div className="ourApproachContainer mb-5 mr-0">
          <h5 className="my-2 font-weight-bold"> Our Approach To Beer </h5>
          <p className="mb-4">
            Our philosophy is to inform about the vast universe of craft beers and help our community grow!
            We believe that beer is still vastly underestimated and that there's a beer for everyone, a whole
            host of aromas, flavours, colours and textures to enjoy. Our mission is to get everyone on that
            journey of discovery. Whether you are a beginner or a seasoned brewer we aim to help you make
            the best beer possible.
          </p>
          <img
            src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&ixid=
          eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>

        <div className="endResultContainer mb-5">
          <h5 className="my-2 font-weight-bold"> The End Result </h5>
          <p className="mb-4">
            Whether you fancy a fruity, hoppy pale ale on a hot sunny day or an unctuous, satisfying stout
            at the end of an evening - we've got you covered. Read on to discover some of the beers that await, or book a brewery
            tour to see where the magic happens.
          </p>
          <img
            src="https://images.unsplash.com/photo-1539097463168-fdc97aa4d984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=
          format&fit=crop&w=1825&q=80"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>

        <button
          className="btn-lg btn-info mr-auto ml-auto my-5"
          onClick={redirect}
        >
          EXPLORE OUR RECIPES
        </button>

      </div>
    </div>
  );
}

export default About;
