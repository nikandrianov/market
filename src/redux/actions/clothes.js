import { SET_CLOTHES } from './types';
import axios from 'axios';

export const fetchClothes = (category) => (dispatch) => {
    axios
        .get(`http://localhost:3001/clothes?${category !== null ? `category=${category}` : ''}`)
        .then(({ data }) => {
            dispatch(setClothes(data));
        });
};

export const setClothes = (items) => ({
    type: SET_CLOTHES,
    payload: items,
});
