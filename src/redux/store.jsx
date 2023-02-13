import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import productsSlice from "./products/allProducts";

export const store = configureStore({
  reducer: {
    product: productsSlice,
    cartItem: cartSlice,
  },
});
