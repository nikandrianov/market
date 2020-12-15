import { SET_CLOTHES } from './types';

export const setClothes = (items) => ({
    type: SET_CLOTHES,
    payload: items,
});
