import {
    ADD_ITEMS_CART,
    CLEAR_CART,
    REMOVE_CART_ITEM,
    PLUS_CART_ITEM,
    MINUS_CART_ITEM,
} from '../actions/types';

export const addToCart = (items) => ({
    type: ADD_ITEMS_CART,
    payload: items,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

export const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    payload: id,
});

export const plusCartItem = (id) => ({
    type: PLUS_CART_ITEM,
    payload: id,
});

export const minusCartItem = (id) => ({
    type: MINUS_CART_ITEM,
    payload: id,
});
