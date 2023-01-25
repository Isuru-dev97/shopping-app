import { createSlice } from "@reduxjs/toolkit";
import Items from "../Items";

const initialState = {
  items: [],
  cartAmount: 0,
  quantity: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartAmount = state.cartAmount + 1;
      const addedItem = Items.find((item) => item.id === action.payload);
      state.items.push(addedItem);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
