import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  messageReceived: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setMessageReceived: (state, action) => {
      state.messageReceived = action.payload;
    },
  },
});

export const { setMessage, setMessageReceived } = messageSlice.actions;
export default messageSlice.reducer;
