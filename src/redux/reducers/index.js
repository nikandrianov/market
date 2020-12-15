import { combineReducers } from 'redux';
import filtersReducer from './filters';
import clothesReducer from './clothes';

const allReducers = combineReducers({
    clothes: clothesReducer,
    filters: filtersReducer,
});

export default allReducers;
