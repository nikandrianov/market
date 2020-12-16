import React from 'react';
import style from './card.module.scss';

const Card = ({ name, img, price, text }) => {
    return (
        <div className={style.column}>
            <div className={style.item}>
                <div className={style.img}>
                    <img src={img} alt="" />
                </div>
                <div className={style.name}>{name}</div>
                <div className={style.price}>
                    <div className={style.cost}>${price}</div>
                    <button className={style.addbtn}>Add to Cart</button>
                </div>
                <div className={style.text}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
