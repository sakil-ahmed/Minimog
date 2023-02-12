import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/allProducts";

export const store = configureStore({
  reducer: {
    product: productsSlice,
  },
});
