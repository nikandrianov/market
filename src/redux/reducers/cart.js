import {
    ADD_ITEMS_CART,
    CLEAR_CART,
    REMOVE_CART_ITEM,
    PLUS_CART_ITEM,
    MINUS_CART_ITEM,
} from '../actions/types';

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
            const totalCount = Object.keys(newItems).reduce(
                (sum, elem) => newItems[elem].items.length + sum,
                0,
            );
            const totalPrice = Object.keys(newItems).reduce(
                (sum, elem) => newItems[elem].totalPrice + sum,
                0,
            );
            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount,
            };
        }
        case CLEAR_CART:
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0,
            };
        case REMOVE_CART_ITEM: {
            const removeItems = { ...state.items };
            const currentTotalPrice = removeItems[action.payload].totalPrice;
            const currentTotalCount = removeItems[action.payload].items.length;
            delete removeItems[action.payload];
            return {
                ...state,
                items: removeItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }
        case PLUS_CART_ITEM: {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: newObjItems.reduce((sum, elem) => elem.price + sum, 0),
                },
            };
            const totalCount = Object.keys(newItems).reduce(
                (sum, elem) => newItems[elem].items.length + sum,
                0,
            );
            const totalPrice = Object.keys(newItems).reduce(
                (sum, elem) => newItems[elem].totalPrice + sum,
                0,
            );
            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount,
            };
        }
        case MINUS_CART_ITEM: {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: newObjItems.reduce((sum, elem) => elem.price + sum, 0),
                },
            };
            const totalCount = Object.keys(newItems).reduce(
                (sum, elem) => newItems[elem].items.length + sum,
                0,
            );
            const totalPrice = Object.keys(newItems).reduce(
                (sum, elem) => newItems[elem].totalPrice + sum,
                0,
            );
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        default:
            return state;
    }
};

export default cart;
