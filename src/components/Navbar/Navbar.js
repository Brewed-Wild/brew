/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (

      <div>
        <Link exact to="/">Home</Link>
        <Link to="/beerlist">Beer</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Navbar;
