/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (

      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Where to next...</h4>

            <div className="text-white">
              <Link className="dropdown-item text-white" exact to="/">Home</Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item text-white" to="/beerlist">Beer</Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item text-white" to="/about">About</Link>
            </div>

          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </div>
    );
  }
}
export default Navbar;
