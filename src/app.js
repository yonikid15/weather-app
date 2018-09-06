import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import { loadState, saveState } from './store/localStorage';
import throttle from 'lodash/throttle';

const store = configureStore();

store.subscribe( throttle( () => {
    saveState({
        locations: store.getState().locations
    });
    console.log( 'saved' );
}, 1000 ));

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render( app, document.getElementById('app') );

