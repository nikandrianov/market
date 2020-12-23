import React from 'react';
import style from './cart.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../../redux/actions/cart';

import CartItem from '../../components/CartItem/CartItem';
import CartFree from '../CartFree';

const Cart = () => {
    const dispatch = useDispatch();
    const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);
    const clothesGroup = Object.keys(items).map((elem) => {
        return items[elem].items[0];
    });

    const onClearCart = () => {
        if (window.confirm('Вы уверены что хотите очистить корзину?')) {
            dispatch(clearCart());
        }
    };

    const onRemoveItem = (id) => {
        if (window.confirm('Вы уверены что хотите удалить товар?')) {
            dispatch(removeCartItem(id));
        }
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };

    return (
        <div className="container">
            {totalCount ? (
                <div className={style.cart}>
                    <div className={style.top}>
                        <h2 className={style.title}>Корзина</h2>
                        <div className={style.clear}>
                            <span onClick={onClearCart}>Очистить корзину</span>
                        </div>
                    </div>
                    <div className={style.content}>
                        {clothesGroup.map((obj) => (
                            <CartItem
                                key={obj.id}
                                {...obj}
                                totalPrice={items[obj.id].totalPrice}
                                totalCount={items[obj.id].items.length}
                                onRemove={onRemoveItem}
                                onPlus={onPlusItem}
                                onMinus={onMinusItem}
                            />
                        ))}
                    </div>
                    <div className={style.bottom}>
                        <div className={style.details}>
                            <span>
                                Всего: <b>{totalCount} шт.</b>
                            </span>
                            <span>
                                Сумма заказа: <b>{totalPrice} ₽</b>
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
            ) : (
                <CartFree />
            )}
        </div>
    );
};

export default Cart;
