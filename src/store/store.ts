import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/authSlice.ts";
import leftDrawerReducer from "../features/leftDrawerSlice.ts";
import modalReducer from "../features/modalSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    leftDrawer: leftDrawerReducer,
    modal: modalReducer,
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
