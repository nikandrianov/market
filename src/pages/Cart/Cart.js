import React from 'react';
import cart from '../../assets/img/icons/cart.svg';
import trash from '../../assets/img/icons/trash.svg';

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__top">
                <h2 className="content__title">
                    <img src={cart} alt="cart" />
                    Корзина
                </h2>
                <div className="cart__clear">
                    <img src={trash} alt="trash" />
                    <span>Очистить корзину</span>
                </div>
            </div>
            <div className="content__items">
                <div className="cart__item">
                    <div className="cart__item-img"></div>
                    <div className="cart__item-info">
                        <h3>Майка</h3>
                    </div>
                    <div className="cart__item-count">
                        <div className="button"></div>
                        <b>2</b>
                        <div className="button"></div>
                    </div>
                    <div className="cart__item-price">
                        <b>770 ₽</b>
                    </div>
                    <div className="cart__item-remove">
                        <div className="button"></div>
                    </div>
                </div>
            </div>
            <div className="cart__bottom">
                <div className="cart__bottom-details">
                    <span>
                        {' '}
                        Всего: <b>3 шт.</b>{' '}
                    </span>
                    <span>
                        {' '}
                        Сумма заказа: <b>900 ₽</b>{' '}
                    </span>
                </div>
                <div className="cart__bottom-buttons">
                    <a href="/" className="button">
                        <span>Вернуться назад</span>
                    </a>
                    <div className="button">
                        <span>Оплатить сейчас</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
