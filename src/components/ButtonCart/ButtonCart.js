import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import cart from '../../assets/img/icons/cart.png';
import style from './button-cart.module.scss';

const Cart = () => {
    const { totalPrice, totalCount } = useSelector(({ cart }) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount,
    }));

    return (
        <Link to="/cart">
            <button className={style.cart}>
                <span>{totalPrice} ₽ |</span>
                <img src={cart} alt="cart" />
                <span>{totalCount}</span>
            </button>
        </Link>
    );
};

export default Cart;
