import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = compose;

export default () => {
    const store = createStore(
        combineReducers({
        
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};