/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Searchbar from '../Searchbar';
import Logo from '../../Assets/LOGO/Brewer_s Heaven icon.svg';

class Navbar extends React.Component {
  render() {
    return (

      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-secondary pt-2 d-block">
            {/* <h4 className="text-light">Where to next...</h4> */}

            <div className="d-flex flex-column text-right">
              <Link className="dropdown-item text-light" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" exact to="/">Home</Link>
              {/* <div className="dropdown-divider" /> */}
              <Link className="dropdown-item text-light" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" to="/beerlist">Beer</Link>
              {/* <div className="dropdown-divider bg-secondary" /> */}
              <Link className="dropdown-item text-light" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" to="/about">About</Link>
            </div>
          </div>
        </div>
        <nav className="navbar d-flex navbar-dark bg-secondary py-0" height="100" id="navbar">
          <Link to="/" className="d-none d-md-flex navbar-brand" >
            <img src={Logo} alt="" className="d-none d-md-flex ml-4" id="logo-navbar"/>
          </Link>
          <div id="nav-div" className="d-none d-md-flex  h-100 align-items-stretch">
            <Link className="navlink dropdown-item mt-50 text-light h-100 pt-30 pb-0 align-self-center" aria-pressed="true" exact to="/"><span>Home</span></Link>
            {/* <div className="dropdown-divider" /> */}
            <Link className="navlink dropdown-item mt-50 text-light h-100 pb-0 align-self-center" to="/beerlist"><span>Beer</span></Link>
            {/* <div className="dropdown-divider bg-secondary" /> */}
            <Link className="navlink dropdown-item mt-50 text-light h-100 pb-0 align-self-center" to="/about"><span>About</span></Link>
            <div className="w-3 pl-20" />
            <Searchbar searchBeers={this.props.searchBeersApp} />
          </div>
          {/* <Link className="navbar-brand" src="" exact to="/"><img className="h-10 w-10" src={Logo} /></Link> */}
          <button className="navbar-toggler ml-auto my-0.6 align-self-center d-md-none " type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </div>
    );
  }
}
export default Navbar;
