import React from 'react';
import style from './cart.module.scss';

import trash from '../../assets/img/icons/trash.svg';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="container">
            <div className={style.cart}>
                <div className={style.top}>
                    <h2 className={style.title}>Корзина</h2>
                    <div className={style.clear}>
                        <img src={trash} alt="trash" />
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.item}>
                        <div className={style.item_img}>
                            <img
                                src="https://neuronsk.ru/upload/medialibrary/771/771dad7444a2937b6085360951e048b1.png"
                                alt=""
                            />
                        </div>
                        <div className={style.item_info}>
                            <h3>Майка</h3>
                        </div>
                        <div className={style.count}>
                            <div className={style.button_minus}>-</div>
                            <b>2</b>
                            <div className={style.button_plus}>+</div>
                        </div>
                        <div className={style.item_price}>
                            <b>770 ₽</b>
                        </div>
                        <div className={style.item_remove}>
                            <div className={style.button_remove}>x</div>
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.details}>
                        <span>
                            Всего: <b>3 шт.</b>
                        </span>
                        <span>
                            Сумма заказа: <b>900 ₽</b>
                        </span>
                    </div>
                    <div className={style.bottom_buttons}>
                        <Link to="/" className={style.button_back}>
                            <span>Вернуться назад</span>
                        </Link>
                        <div className={style.button_pay}>
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
