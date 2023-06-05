import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    show: false,
  },
  reducers: {
    showDrawer(state) {
      state.show = true;
    },
    hideDrawer(state) {
      state.show = false;
    },
  },
});

const drawerReducer = drawerSlice.reducer;
const drawerActions = drawerSlice.actions;

export { drawerReducer, drawerActions };
