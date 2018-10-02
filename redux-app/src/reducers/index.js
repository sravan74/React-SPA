import { combineReducers } from 'redux';
import {count} from './count';

const rootReducer = combineReducers({
    count: count
});

export default rootReducer;
