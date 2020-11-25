import React from 'react';
import cart from '../../assets/img/icons/cart.png';
import style from'./cart.module.scss';

const Cart = () => {
    return (
        <>
            <button className={style.cart}>
                <img src={cart} alt="cart"/>
            </button>
        </>
    )
}

export default Cart;