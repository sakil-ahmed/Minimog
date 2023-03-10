import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/reducers";

export const store = configureStore({
  reducer,
});
