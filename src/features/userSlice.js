import { createSlice } from "@reduxjs/toolkit";

// This creates a User Store with actions and reducers
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    subscribe: (state, action) => {
      state.user.subscription = action.payload;
    },
  },
});

export const { login, logout, subscribe } = userSlice.actions;

// these functions below are selectors. allows to get value from state

export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
