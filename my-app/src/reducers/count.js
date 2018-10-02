import initialState from './initialState';

export const count = (state = initialState.count, action) => {
    switch (action.type) {
        case 'INCREMENT':
            let incvalue = state.value + action.payload;
            return { ...state, value: incvalue, name: 'goyal' };
        case 'DECREMENT':
            let decvalue = state.value - action.payload;
            return { ...state, value: decvalue, name:'Sahil' };
        default:
            return state
    }
}


