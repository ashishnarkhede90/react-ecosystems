import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store'; 
import App from './App.js'

ReactDOM.render(
    // wrap app component in provider
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
)