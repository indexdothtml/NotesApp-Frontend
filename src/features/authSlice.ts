import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { UserData } from "@/types/types";

type AuthInitialState = {
  isAuthenticated: boolean;
  userData: UserData | null;
};

const initialState: AuthInitialState = {
  isAuthenticated: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserData>) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
