/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './HomePage.css';

class HomePage extends React.Component {
  render() {
    const videoSource = 'https://player.vimeo.com/external/375916999.sd.mp4?s=7e81e040edde5b5eb5e67ea0e1324454bc1a8bed&profile_id=139&oauth2_token_id=57447761';
    return (
      <div>

        <div className="totalVideo">
          <div className="backVideo">
            <video autoPlay="autoplay" loop="loop" muted>
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="textButton">
                        
              <button ctype="button">Take a look at our 375 beers</button>
            
          </div>
        </div>
        <div className="totalImage">
          <div className="card1">
            <p className="cardTitle">Workshop</p>
          <img className="img1" src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Join Brewers Heaven Workshop on 07/12/2020 and learn all you need to know to produce your own incredible beer! <br></br>If your are interested just send us an email to reserve your place</p>
          </div>
          <div className="card2">
          <p className="cardTitle">Beer of the Week</p>
          <img className="img2" src="https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>This week the most voted beer by our clients was PUNK beer! If you didnt try yet, dont waste more time.</p>
          </div>
          <div className="card3">
          <p className="cardTitle">Receipe of the Week</p>
          <img className="img3" src="https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Receipe of the Week</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
