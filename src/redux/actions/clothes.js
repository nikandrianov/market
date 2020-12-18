import { SET_CLOTHES } from './types';
import axios from 'axios';

export const fetchClothes = () => (dispatch) => {
    axios.get('http://localhost:3001/clothes').then(({ data }) => {
        dispatch(setClothes(data));
    });
};

export const setClothes = (items) => ({
    type: SET_CLOTHES,
    payload: items,
});
