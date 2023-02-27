import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import messageReducer from "./messagesSlice";
import newUserReducer from "./newUserSlice";
import triviaReducer from "./triviaSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    users: usersReducer,
    newUser: newUserReducer,
    messages: messageReducer,
    trivia: triviaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
