import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import roomReducer from "./roomSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
  },
});

export default store;
