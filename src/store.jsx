import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./features/cartSlice";
import getItemReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: { cart: cartSliceReducer, getItemReducer },
});
