import { ADD_ITEMS_CART, SET_TOTAL_PRICE, SET_TOTAL_COUNT } from '../actions/types';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEMS_CART: {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            };
            const obj = [].concat.apply([], Object.values(newItems));
            return {
                ...state,
                items: newItems,
                totalPrice: obj.reduce((sum, elem) => elem.price + sum, 0),
                totalCount: obj.length,
            };
        }
        case SET_TOTAL_PRICE:
            return { ...state, totalPrice: action.payload };
        case SET_TOTAL_COUNT:
            return { ...state, totalCount: action.payload };
        default:
            return state;
    }
};

export default cart;
