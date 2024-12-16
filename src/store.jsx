// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // Import the cartSlice reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Add cartReducer to the Redux store
  },
});

export default store;
