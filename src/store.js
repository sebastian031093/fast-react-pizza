import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feactures/user/userSlice";
import cartReducer from "./feactures/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
