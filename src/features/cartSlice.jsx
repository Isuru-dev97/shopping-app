import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getItem = createAsyncThunk(
  "cart/getItem",
  async (name, thunkAPI) => {
    try {
      const items = await axios.get("https://fakestoreapi.com/products");
      console.log(items);
      return items.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong!");
    }
  }
);
const initialState = {
  items: [],
  cartAmount: 0,
  isSuccess: false,
  message: "",
  Loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectItem = state.getItem.find(
        (item) => item.id === action.payload
      );
      state.cartAmount += 1;
      state.cart.push(selectItem);
    },
    decrement: (state, { payload }) => {
      const selectItem = state.getItem.find((item) => item.id === payload);
      if (selectItem.amount > 1) {
        selectItem.amount = selectItem.amount -= 1;
      }
    },
    increment: (state, { payload }) => {
      const selectItem = state.getItem.find((item) => item.id === payload);
      selectItem.amount = selectItem.amount += 1;
    },
    clearCart: (state) => {
      return { cart: [] };
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;

        console.log(`${total} ${amount}`);
      });
      state.cartAmount = amount;
      state.totalPrice = total;
    },
  },
  extraReducers: {
    [getItem.pending]: (state, { payload }) => {
      state.Loading = true;
    },
    [getItem.fulfilled]: (state, { payload }) => {
      state.Loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getItem.rejected]: (state, { payload }) => {
      state.message = payload;
      state.Loading = false;
      state.isSuccess = false;
    },
  },
});

export const { addToCart, clearCart, increment, decrement, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
