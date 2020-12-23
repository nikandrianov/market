import React from 'react';
import style from './cart-item.module.scss';

const CartItem = ({ id, name, img, totalPrice, totalCount, onRemove, onPlus, onMinus }) => {
    const handleRemoveClick = () => {
        onRemove(id);
    };

    const handlePlusClick = () => {
        onPlus(id);
    };

    const handleMinusClick = () => {
        onMinus(id);
    };

    return (
        <div className={style.item}>
            <div className={style.item_img}>
                <img src={img} alt="" />
            </div>
            <div className={style.item_info}>
                <h3>{name}</h3>
            </div>
            <div className={style.count}>
                <button className={style.button_minus} onClick={handleMinusClick}>
                    -
                </button>
                <b>{totalCount}</b>
                <button className={style.button_plus} onClick={handlePlusClick}>
                    +
                </button>
            </div>
            <div className={style.item_price}>
                <b>{totalPrice} ₽</b>
            </div>
            <div className={style.item_remove}>
                <button className={style.button_remove} onClick={handleRemoveClick}>
                    x
                </button>
            </div>
        </div>
    );
};

export default CartItem;
