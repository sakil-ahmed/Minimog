import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { title, mainImg, price, id, quantity } = action.payload;

      // if item already exits in cart
      const itemExists = state.cartItems.find((item) => item.id === id);
      const remainingItems = state.cartItems.filter((item) => item.id !== id);

      if (itemExists) {
        state.cartItems = [
          ...remainingItems,
          {
            id,
            quantity: itemExists.quantity + 1,
            title,
            price,
            mainImg,
          },
        ];
      } else {
        state.cartItems = [
          ...state.cartItems,
          {
            id,
            quantity: quantity,
            title,
            price,
            mainImg,
          },
        ];
      }
    },
    removeTocart: (state, action) => {
      const { id, quantity } = action.payload;

      // if quantiy is greater than 1: reduce quantity by 1
      if (quantity > 1) {
        const itemExists = state.cartItems.find((item) => item.id === id);
        const remainingItems = state.cartItems.filter((item) => item.id !== id);

        state.cartItems = [
          ...remainingItems,
          {
            id,
            quantity: itemExists.quantity - 1,
            title: itemExists.title,
            price: itemExists.price,
            mainImg: itemExists.mainImg,
          },
        ];
      } else {
        // if quantity is 1: remove item from cart
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    removeSingleItem: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, removeTocart, removeSingleItem } = cartSlice.actions;
export default cartSlice.reducer;
