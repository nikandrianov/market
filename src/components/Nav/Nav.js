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
                    <Link className={style.link}>About</Link>
                </li>
                <li>
                    <Link className={style.link}>Blog</Link>
                </li>
                <li>
                    <Link className={style.link}>Support</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
