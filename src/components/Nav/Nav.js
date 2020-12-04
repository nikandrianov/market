import React from 'react';
import style from'./nav.module.scss';

const Nav = () => {
    return (
        <nav className={style.menu}>
            <ul className={style.items}>
                <li><a href="#" className={`${style.link} ${style.active}`}>Men</a></li>
                <li><a href="#" className={style.link}>Women</a></li>
                <li><a href="#" className={style.link}>About</a></li>
                <li><a href="#" className={style.link}>Blog</a></li>
                <li><a href="#" className={style.link}>Support</a></li>
            </ul>
        </nav>
    )
}

export default Nav;