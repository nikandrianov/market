import { ADD_ITEMS_CART } from '../actions/types';

export const addToCart = (items) => ({
    type: ADD_ITEMS_CART,
    payload: items,
});
