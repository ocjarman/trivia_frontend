import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      console.log("payload", action.payload);
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
