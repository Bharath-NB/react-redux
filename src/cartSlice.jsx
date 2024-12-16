// src/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, title: 'iPhone 9', price: 549, quantity: 0 },
    { id: 2, title: 'iPhone X', price: 899, quantity: 0 },
    { id: 3, title: 'Samsung Universe 9', price: 1249, quantity: 0 },
    { id: 4, title: 'OPPOF19', price: 280, quantity: 0 },
    { id: 5, title: 'Huawei P30', price: 499, quantity: 0 }
  ],
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cart;
export const selectTotalQuantity = (state) => state.cart.cart.reduce((total, item) => total + item.quantity, 0);
export const selectTotalAmount = (state) => state.cart.cart.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
