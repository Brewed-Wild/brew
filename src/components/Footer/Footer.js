/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../../Assets/LOGO/Brewer_s Heaven icon.svg';
import Twitter from '../../Assets/twitter.svg';
import Facebook from '../../Assets/facebook.svg';
import Instagram from '../../Assets/instagram.svg';
import SaliSali from '../../Assets/SaliSali.png';
import Easytech from '../../Assets/EasyTech_logo.svg';
import Fixee from '../../Assets/Fixee.png';

class Footer extends React.Component {
  state = {
    userEmail: '',
    userMessage: '',
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value })}

  handleSubmit = (event) => event.preventDefault()

  render() {
    return (
      <footer className="d-grid bg-light h-100">
        <div className="row row-cols-sm-3 d-flex align-items-center">
          <div className="col-2  d-none d-md-flex align-items-center justify-content-center">
            <Link exact to="/" className="">
              <img src={Logo} alt="Brewer's Heaven" className="logo-footer" />
            </Link>
          </div>
          <div className=" col-3 d-flex flex-column justify-content-start flex-md-row align-items-md-center justify-content-md-center social-icons">
            <a href= "http://www.twitter.com"><img src={Twitter} alt="" className="social-icon m-3" /></a>
            <a href= "http://www.facebook.com"><img src={Facebook} alt="" className="social-icon m-3" /></a>
            <a href= "http://www.instagram.com"><img src={Instagram} alt="" className="social-icon m-3" /></a>
          </div>
          <div className="col">
            <p>
              <h6 className="">Our Partners</h6>
              <div className="partner-logo-container d-inline-grid">

                <a href="https://www.raspberrypi.org/"><img className= "easytech-logo" src={Easytech} alt="" /></a>
                <a href="https://handyman.com/"><img className= "fixee-logo" src={Fixee} alt="" /></a>
                <a href="https://magicseaweed.com/"><img className= "sali-logo" src={SaliSali} alt="" /></a>
              </div>

            </p>
          </div>
          <div className="col d-md-flex flex-column">
            <p className="text-left">
              <h6>Start a conversation</h6>
              <p>
                <a href="mailto:hi@brewersheaven.com" target="_blank" rel="noopener noreferrer" className="text-dark">hi@brewersheaven.com</a> <br />
                <a href="tel:+351 910 600 569" className="text-dark">+351 910 600 569</a><br />
                <a href="https://www.google.com/maps/place/Rua+do+Conde+de+Redondo+145,+1150-294+Lisboa/@38.7248464,-9.1481597,17z/data=!3m1!4b1!4m5!3m4!1s0xd193377dbff9c5d:0xeb7c8841e775e3ae!8m2!3d38.7248464!4d-9.145971" className="text-dark">Rua do Conde de Redondo 145-2 Lisbon</a>
              </p>
            </p>
            {/* <input className="form-control text-justify" type="email" id="userEmail" name="userEmail" value={this.state.userEmail} placeholder="Email" onChange={this.handleChange} />
            <input className="form-control" type="text" id="userMessage" name="userMessage" value={this.state.userMessage} onChange={this.handleChange} placeholder="Message"/>
            <input type="submit" className="invisible" onSubmit={this.handleSubmit} /> */}

          </div>
        </div>
        <div className=" text-right">
          <hr />
          <i>Brewer's Heaven @ 2020</i>
        </div>

      </footer>
    );
  }
}

export default Footer;
