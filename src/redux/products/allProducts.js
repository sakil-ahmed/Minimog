import { createSlice } from "@reduxjs/toolkit";

import CardData from "./../../../data/data";
const initialState = {
  allProducts: CardData,
  isLoading: false,
};

const productsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
