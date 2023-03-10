import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishListItems: [],
};

const wishListSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { title, mainImg, price, id } = action.payload;
      const itemExists = state.wishListItems.find((item) => item.id === id);
      if (itemExists) {
      } else {
        state.wishListItems = [
          ...state.wishListItems,
          {
            id,
            title,
            price,
            mainImg,
          },
        ];
      }
    },
  },
});

export const { addToWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;
