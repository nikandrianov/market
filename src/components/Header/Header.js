import React from 'react';
import style from'./header.module.scss';
import Nav from '../Nav';
import Cart from '../Cart';

const Header = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.body}>
                    <a href="#" className={style.logo}>la market</a>
                    <Nav />
                    <Cart />
                </div>
            </div>
        </header>
    )
}

export default Header;