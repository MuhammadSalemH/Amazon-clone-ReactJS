import { configureStore } from "@reduxjs/toolkit";
import { drawerReducer } from "./drawerSlice";
import { cartReducer } from "./cartSlice";
import { filterReducer } from "./filterationSlice";
import { authReducer } from "./authSlice";

const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    cart: cartReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

export default store;
