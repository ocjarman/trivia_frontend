import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  room: "",
};

export const newUsersSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
  },
});

export const { setName, setRoom } = newUsersSlice.actions;
export default newUsersSlice.reducer;
