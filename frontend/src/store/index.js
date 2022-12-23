import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import roomReducer from "./roomSlice";
import messageReducer from "./messagesSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
    messages: messageReducer,
  },
});

export default store;
