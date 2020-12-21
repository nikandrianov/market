import { combineReducers } from 'redux';
import filters from './filters';
import clothes from './clothes';
import cart from './cart';

const allReducers = combineReducers({
    clothes,
    filters,
    cart,
});

export default allReducers;
