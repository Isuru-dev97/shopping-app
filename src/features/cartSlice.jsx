import { createSlice } from "@reduxjs/toolkit";
import Items from "../Items";

const initialState = {
  Items: Items,
  cartAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartAmount = state.cartAmount + 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
