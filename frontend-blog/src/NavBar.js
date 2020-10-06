import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <div className = "navbar">
                    <div className="special-name">
                        <h3>ShareYourByte</h3>
                    </div>
                <nav>
                <NavLink to ="/">Articles</NavLink>
                <NavLink to ="/login">Login</NavLink>
                    <NavLink to = "/register">Register</NavLink>
                </nav>
            </div>
        );  
    }
}

export default NavBar;