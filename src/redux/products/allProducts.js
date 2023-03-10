import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
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
