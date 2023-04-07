import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";

export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
