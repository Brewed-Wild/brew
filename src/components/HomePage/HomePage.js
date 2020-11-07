/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://previews.123rf.com/images/lightfieldstudios/lightfieldstudios1909/lightfieldstudios190916986/130310039-panoramic-shot-of-bottles-of-light-beer-near-scattered-pistachios-on-brown-textured-surface.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beer-tap-panoramic-david-lee-thompson.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://previews.123rf.com/images/lightfieldstudios/lightfieldstudios1909/lightfieldstudios190916986/130310039-panoramic-shot-of-bottles-of-light-beer-near-scattered-pistachios-on-brown-textured-surface.jpg" alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="container">
          
          <div className="row">
            <div className="col-lg-4">
            <img src="https://images.unsplash.com/photo-1601219533375-6f5ddc7f8212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Third slide"/>
            </div>
            <div className="col-lg-4">
            <img src="https://images.unsplash.com/photo-1596115246571-598a16e725ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Third slide"/>
            </div>
            <div className="col-lg-4">
            <img src="https://images.unsplash.com/photo-1559180786-c6f26acc1111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Third slide"/>
            </div>
          </div>
        </div>
      </div>
        );
  }
}

export default HomePage;
