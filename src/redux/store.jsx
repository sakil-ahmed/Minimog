import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import productsSlice from "./products/allProducts";
import wishListSlice from "./wishList/wishList";

export const store = configureStore({
  reducer: {
    product: productsSlice,
    cartItem: cartSlice,
    wishList: wishListSlice,
  },
});
