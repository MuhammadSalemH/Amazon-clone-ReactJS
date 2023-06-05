import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const filterationSlice = createSlice({
  name: "filtered",
  initialState,
  reducers: {
    addFilteredItems(state, action) {
      state.items = action.payload;
    },
  },
});

const filterReducer = filterationSlice.reducer;
const filterActions = filterationSlice.actions;

export { filterReducer, filterActions };
