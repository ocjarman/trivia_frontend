import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: "",
  roomJoined: false,
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoom: (state, action) => {
      state.room = action.payload;
    },
    setRoomJoined: (state, action) => {
      state.roomJoined = action.payload;
    },
  },
});

export const { setRoom, setRoomJoined, setExitRoom } = roomSlice.actions;
export default roomSlice.reducer;
