import { createSlice } from "@reduxjs/toolkit";

export const tables = createSlice({
  name: "tables",
  initialState: {
    tables: [],
  },
  reducers: {
    setTable: (state, action) => {
      state.tables = action.payload;
    },
  },
});

export const { setTable, addTable, updateTable, deleteTable } = tables.actions;

export default tables.reducer;
