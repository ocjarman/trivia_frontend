import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  showChat: false,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setShowChat: (state, action) => {
      state.showChat = !state.showChat;
    },
  },
});

export const { addMessage, setShowChat } = messagesSlice.actions;
export default messagesSlice.reducer;
