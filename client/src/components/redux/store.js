import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import productReducer from "./product";
import tableReducer from "./Table";

export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    table: tableReducer,
  },
});
