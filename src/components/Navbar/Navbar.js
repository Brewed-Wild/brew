import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Logo from "../../Assets/EasyTech_logo.svg"

class Navbar extends React.Component {

    render () {
        return (    
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"> <img src={Logo} width="30" height="30" class="d-inline-block align-top mr-3" alt="" loading="lazy"/>
    Brewer's Heaven  </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav py-2 px-4 mr-auto">
                   
                    <li class="nav-item active" >
                        <a class="nav-link" href="#"> Home <span class="sr-only">(current)</span></a>
                    </li>
                   
                    <li class="nav-item active px-2">
                        <a class="nav-link" href="#"> Recipes <span class="sr-only">(current)</span></a>
                    </li>
                            
                    <li class="nav-item active px-2">
                        <a class="nav-link" href="#"> Ingredients <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item active px-2">
                        <a class="nav-link" href="#"> Equipment <span class="sr-only">(current)</span></a>
                    </li>
                            
                    <li class="nav-item active px-2">
                        <a class="nav-link" href="#"> Brew History <span class="sr-only">(current)</span></a>
                    </li>
                            
                    <li class="nav-item active px-2">
                        <a class="nav-link" href="#"> About Us <span class="sr-only">(current)</span></a>
                    </li>
                            
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /    >
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
            </div>

           
        )
    }
}

export default Navbar;
