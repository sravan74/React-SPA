import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {git} from './git';
import {wheather} from './whether';

const rootReducer = combineReducers({
    routing: routerReducer,
    git: git,
    wheather: wheather,
});

export default rootReducer;
