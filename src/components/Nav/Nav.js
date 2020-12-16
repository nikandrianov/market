import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={style.menu}>
            <ul className={style.items}>
                <li>
                    <Link to="/" className={`${style.link} ${style.active}`}>
                        Clothes
                    </Link>
                </li>
                <li>
                    <a className={style.link}>About</a>
                </li>
                <li>
                    <a className={style.link}>Blog</a>
                </li>
                <li>
                    <a className={style.link}>Support</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
