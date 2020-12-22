import { ADD_ITEMS_CART, CLEAR_CART } from '../actions/types';

export const addToCart = (items) => ({
    type: ADD_ITEMS_CART,
    payload: items,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});
