import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const leftDrawerSlice = createSlice({
  name: "leftDrawer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.open = true;
    },

    closeDrawer: (state) => {
      state.open = false;
    },
  },
});

export const { openDrawer, closeDrawer } = leftDrawerSlice.actions;

export default leftDrawerSlice.reducer;
