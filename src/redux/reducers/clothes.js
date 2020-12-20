import { SET_CLOTHES } from '../actions/types';

const initialState = {
    items: [],
};

const getClothes = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLOTHES:
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

export default getClothes;
