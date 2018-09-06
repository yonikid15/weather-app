import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from '../reducers/weather';
import locationsReducer from '../reducers/locations';
import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {

    // Load data saved to local storage 
    const persistedData = loadState();

    const store = createStore(

        combineReducers({
            locations: locationsReducer
        }),

        persistedData,

        composeEnhancers(applyMiddleware(thunk))

        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};




