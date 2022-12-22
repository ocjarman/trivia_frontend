import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./playersSlice";
import chatReducer from "./chatSlice";
import roomReducer from "./roomSlice";
import messageReducer from "./messageSlice";

const store = configureStore({
  reducer: {
    chat: chatReducer,
    players: playersReducer,
    room: roomReducer,
    message: messageReducer,
  },
});

export default store;
