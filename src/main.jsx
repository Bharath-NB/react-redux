// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import CartPage from './CartPage';

ReactDOM.render(
  <Provider store={store}>
    <CartPage />
  </Provider>,
  document.getElementById('root')
);
