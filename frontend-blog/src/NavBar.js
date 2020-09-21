import React, { Component } from 'react';
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <div className = "navbar">
                    <div className="special-name">
                        <h3>ShareYourByte</h3>
                    </div>
                <nav>
                    <a href="#">Login</a>
                    <a href ="#">Register</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;