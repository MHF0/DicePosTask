import { createSlice } from "@reduxjs/toolkit";

export const products = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProduct } = products.actions;

export default products.reducer;
