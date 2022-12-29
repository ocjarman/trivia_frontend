import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  roomId: "",
  score: 0,
};

export const newUsersSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { setName, setRoomId, setScore } = newUsersSlice.actions;
export default newUsersSlice.reducer;
