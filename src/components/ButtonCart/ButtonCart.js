import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/img/icons/cart.png';
import style from './button-cart.module.scss';

const Cart = () => {
    return (
        <>
            <Link to="/cart">
                <button className={style.cart}>
                    <img src={cart} alt="cart" />
                </button>
            </Link>
        </>
    );
};

export default Cart;
