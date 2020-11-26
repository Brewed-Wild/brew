/* eslint-disable quotes */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { BeerSearch } from "../../contexts/BeerSearch";
import Logo from "../../Assets/LOGO/Brewers_Heaven_side_text.svg";
import "./Navbar.css";

function Navbar(props) {
  const { searchFieldHandler } = React.useContext(BeerSearch);
  const { searchFieldGo } = React.useContext(BeerSearch);

  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-secondary pt-2 d-block">
          <div className="d-flex flex-column text-right">
            <Link
              className="dropdown-item text-light"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              exact
              to="/"
            >
              Home
            </Link>
            <Link
              className="dropdown-item text-light"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              to="/beerlist"
            >
              Beer
            </Link>
            <Link
              className="dropdown-item text-light"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <nav
        className="navbar d-flex navbar-dark bg-secondary py-0"
        height="100"
        id="navbar"
      >
        <Link to="/" className="d-none d-md-flex navbar-brand">
          <img
            src={Logo}
            alt=""
            className="d-none d-md-flex ml-4"
            id="logo-navbar"
          />
        </Link>
        <div
          id="nav-div"
          className="d-none d-md-flex  h-100 align-items-stretch"
        >
          <Link
            className="navlink dropdown-item mt-50 text-light h-100 pt-30 pb-0 align-self-center"
            aria-pressed="true"
            exact
            to="/"
          >
            <span>Home</span>
          </Link>
          <Link
            className="navlink dropdown-item mt-50 text-light h-100 pb-0 align-self-center"
            to="/beerlist"
          >
            <span>Beer</span>
          </Link>
          {/* <div className="dropdown-divider bg-secondary" /> */}
          <Link
            className="navlink dropdown-item mt-50 text-light h-100 pb-0 align-self-center"
            to="/about"
          >
            <span>About</span>
          </Link>
          <form className="form-inline pl-30" id="searchFieldContainer">
            <input
              id="searchField"
              onChange={searchFieldHandler}
              type="text"
              className="form-control mr-sm-2 "
              id="searchfield"
              type="search"
              placeholder="&#x1F50D; Search beer by name..."
              aria-label="Search"
            />
            <Link to="/beerlist">
              <button
                id="buttonGo"
                className="mt-50 h-100 text-light align-self-center d-flex"
              >
                go
              </button>
            </Link>
          </form>
        </div>
        <button
          className="navbar-toggler ml-auto my-0.6 align-self-center d-md-none "
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
