import { ADD_ITEMS_CART, CLEAR_CART } from '../actions/types';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEMS_CART: {
            const currentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: currentItems.reduce((sum, elem) => elem.price + sum, 0),
                },
            };
            const obj = [].concat.apply(
                [],
                Object.values(newItems).map((elem) => elem.items),
            );
            return {
                ...state,
                items: newItems,
                totalPrice: obj.reduce((sum, elem) => elem.price + sum, 0),
                totalCount: obj.length,
            };
        }
        case CLEAR_CART: {
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0,
            };
        }
        default:
            return state;
    }
};

export default cart;
