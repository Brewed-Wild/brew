/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LogoText from '../../Assets/LOGO/Brewer_s Heaven.svg';
import Twitter from '../../Assets/twitter.svg';
import Facebook from '../../Assets/facebook.svg';
import Instagram from '../../Assets/instagram.svg';

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
      <footer className="d-grid bg-light">
        <div className="row row-cols-md-3 row-cols-2">
          <Link exact to="/" className="col d-flex align-items-center justify-content-center">
            <img src={LogoText} alt="Brewer's Heaven" className="h-50"/>
          </Link>
          <div className="social-icons col d-flex flex-column flex-md-row align-items-md-center justify-content-md-center">
            <img src={Twitter} alt="" className="social-icon pt-10" />
            <img src={Facebook} alt="" className="social-icon pt-10" />
            <img src={Instagram} alt="" className="social-icon" />
          </div>
          <form className="d-none d-md-flex flex-column col">
            <input className="form-control text-justify" type="email" id="userEmail" name="userEmail" value={this.state.userEmail} placeholder="Email" onChange={this.handleChange} />
            <input className="form-control" type="text" id="userMessage" name="userMessage" value={this.state.userMessage} onChange={this.handleChange} placeholder="Message"/>
            <input type="submit" className="invisible" onSubmit={this.handleSubmit} />
            <i>Rua do Conde de Redondo 145-2 andar, 1150-104 Lisboa Phone: +351 910 600 569</i>
          </form>
        </div>
        <div className="p-30">
          <hr />
          <i>Brewer's Heaven @ 2020</i>
        </div>

      </footer>
    );
  }
}

export default Footer;
