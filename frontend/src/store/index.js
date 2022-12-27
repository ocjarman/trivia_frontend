import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import messageReducer from "./messagesSlice";
import newUserReducer from "./newUserSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    newUser: newUserReducer,
    messages: messageReducer,
  },
});

export default store;
