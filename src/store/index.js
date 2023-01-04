import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import messageReducer from "./messagesSlice";
import newUserReducer from "./newUserSlice";
import triviaReducer from "./triviaSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    newUser: newUserReducer,
    messages: messageReducer,
    trivia: triviaReducer,
  },
});

export default store;
