import React from 'react';
import {Link } from 'react-router-dom';
import Logo from "../../Assets/EasyTech_logo.svg"
import './Navbar.css';

class Navbar extends React.Component {

    render () {
        return (    
            <div>
                <Link to="/">Home</Link>
                <Link to="/BeerList">Beer</Link>
                <Link to="/About">About</Link>
            </div>
        )
    }
}

export default Navbar;
