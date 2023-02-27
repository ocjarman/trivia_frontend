import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  name: string,
  roomId: string
}

const initialState: initialStateType = {
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
