import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const navBarSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    openNav: (state, action) => {
      state.isOpen = true;
    },
    closeNav: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openNav, closeNav } = navBarSlice.actions;

export default navBarSlice.reducer;
