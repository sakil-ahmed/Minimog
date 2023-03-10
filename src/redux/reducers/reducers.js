import { combineReducers } from "redux";
import cartSlice from "../cart/cartSlice";
import productsSlice from "../products/allProducts";
import wishListSlice from "../wishList/wishList";

const rootReducer = combineReducers({
  product: productsSlice,
  cartItem: cartSlice,
  wishList: wishListSlice,
});

export default rootReducer;
