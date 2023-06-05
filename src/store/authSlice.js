import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userIsLoggedin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action) {
      state.user = action.payload;
      state.userIsLoggedin = !!state.user;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    signOut(state) {
      state.user = null;
      state.userIsLoggedin = false;
      localStorage.removeItem("user");
    },
  },
});

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authReducer, authActions };
