import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';


function configureStoreDev(initialState) {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
        const store = createStore(rootReducer, initialState, composeEnhancers()
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

const configureStore = configureStoreDev;

export default configureStore;
