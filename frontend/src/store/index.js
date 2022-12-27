import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
// import roomReducer from "./roomSlice";
import messageReducer from "./messagesSlice";
import newUserReducer from "./newUserSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    newUser: newUserReducer,
    // room: roomReducer,
    messages: messageReducer,
  },
});

export default store;
