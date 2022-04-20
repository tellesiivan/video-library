import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";
import uiReducer from "./UiSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    ui: uiReducer,
  },
});
