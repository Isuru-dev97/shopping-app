import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getItem = createAsyncThunk("getData", (arg, { rejectWithValue }) => {
  try {
    const { data } = axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    rejectWithValue(error.response.data);
  }
});

const ItemsSlice = createSlice({
  name: "apiItem",
  initialState: {
    data: [],
    isSuccess: false,
    message: "",
    Loading: false,
  },
  reducer: {},
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

export default ItemsSlice;
