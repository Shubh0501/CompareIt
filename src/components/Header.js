import React from 'react';

import '../styles/Header.css'
import logo from '../images/logo.png';

const Header = () => {

    return (
        <div className="header-container navbar navbar-light">
            <div className="logo-container navbar-logo">
                <img src={logo} alt="Emblem" loading="lazy" className="app-logo"/>
            </div>
            <div className="brand-container navbar-brand">
                <p>TITLE OF THE ORGANISATION</p>
            </div>
        </div>
    );
}

export default Header;