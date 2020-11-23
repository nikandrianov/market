import React from 'react';
import './header.scss';
import Nav from '../Nav';
import Basket from '../Basket';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="body">
                    <a href="#" className="logo">la market</a>
                    <Nav />
                    <Basket />
                </div>
            </div>
        </header>
    )
}

export default Header;