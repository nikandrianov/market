import { SET_CATEGORY } from './types';

export const setCategory = (catItem) => ({
    type: SET_CATEGORY,
    payload: catItem,
});
