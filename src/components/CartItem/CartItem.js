import React from 'react';
import style from './cart-item.module.scss';

const CartItem = ({ name, img, totalPrice, totalCount }) => {
    return (
        <div className={style.item}>
            <div className={style.item_img}>
                <img src={img} alt="" />
            </div>
            <div className={style.item_info}>
                <h3>{name}</h3>
            </div>
            <div className={style.count}>
                <div className={style.button_minus}>-</div>
                <b>{totalCount}</b>
                <div className={style.button_plus}>+</div>
            </div>
            <div className={style.item_price}>
                <b>{totalPrice} ₽</b>
            </div>
            <div className={style.item_remove}>
                <div className={style.button_remove}>x</div>
            </div>
        </div>
    );
};

export default CartItem;
