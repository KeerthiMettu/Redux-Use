import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allreducers from './Reducers/Index'
import {Provider} from 'react-redux'


let store = createStore(allreducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


reportWebVitals();
