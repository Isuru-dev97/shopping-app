import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getItem = createAsyncThunk(
  "cart/getItem",
  async (name, thunkAPI) => {
    try {
      const storeData = await axios.get("https://fakestoreapi.com/products");
      console.log(storeData.data);
      return storeData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Somthing Went wrong!");
    }
  }
);
const initialState = {
  items: [],
  cartAmount: 0,
  isSuccess: false,
  message: "",
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartAmount = state.cartAmount + 1;
    },
  },
  extraReducers: {
    [getItem.pending]: (state) => {
      state.isLoading = true;
    },
    [getItem.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getItem.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
