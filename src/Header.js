import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <h2>Zeta</h2>
            <div className="header__list">
                <a>Login</a>
                <a href="#">Upload </a>
            </div>
        </div>
    )
}

export default Header;