import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  roomId: "",
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
  },
});

export const { setName, setRoomId } = newUsersSlice.actions;
export default newUsersSlice.reducer;
