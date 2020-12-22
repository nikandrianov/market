import React from 'react';
import style from './cart-free.module.scss';
import { Link } from 'react-router-dom';

const CartFree = () => {
    return (
        <div className="container">
            <div className={style.cart}>
                <h2>Корзина пуста</h2>
                <Link to="/" className={style.button_back}>
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    );
};

export default CartFree;
