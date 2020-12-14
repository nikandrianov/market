import { combineReducers } from 'redux';
import FiltersReducer from './filters';

const allReducers = combineReducers({
    filters: FiltersReducer,
});

export default allReducers;
