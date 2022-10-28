import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className="header-div">
            <div className="left-div">
                <img src={logo} alt=""/>
            </div>
            <div className="right-div">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Contact</a>
                <a href="#">Shop</a>
            </div>
        </div>
    );
};

export default Header;