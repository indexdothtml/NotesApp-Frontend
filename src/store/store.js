import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/authSlice.js";
import leftDrawerReducer from "../features/leftDrawerSlice.js";
import modalReducer from "../features/modalSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    leftDrawer: leftDrawerReducer,
    modal: modalReducer,
  },
});
