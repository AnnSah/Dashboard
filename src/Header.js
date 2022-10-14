import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <h2>Zeta</h2>
            <div className="header__list">
                <a href="#">Login</a>
                <a href="#">Upload </a>
            </div>
        </div>
    )
}

export default Header;