/**
 * Created by kevin on 16-4-8.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import createLogger from 'redux-logger';
import {compose} from 'redux';
const logger = createLogger();

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, compose(
        applyMiddleware(thunk,logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    if (module.hot) {
        module.hot.accept('../reducers', ()=> {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        })
    }
    return store;
}