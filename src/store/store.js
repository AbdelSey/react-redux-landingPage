import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "../features/NavSlice/NavBarSlice";

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
  },
});
