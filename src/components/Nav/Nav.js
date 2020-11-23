import React from 'react';
import './nav.scss';

const Nav = () => {
    return (
        <nav className="menu">
            <ul className="items">
                <li><a href="#" className="link active">Men</a></li>
                <li><a href="#" className="link">Women</a></li>
                <li><a href="#" className="link">About</a></li>
                <li><a href="#" className="link">Blog</a></li>
                <li><a href="#" className="link">Support</a></li>
            </ul>
        </nav>
    )
}

export default Nav;