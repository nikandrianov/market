import { SET_CATEGORY } from '../actions/types';

const initialState = {
    category: '',
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, category: action.payload };
        default:
            return state;
    }
};

export default filters;
