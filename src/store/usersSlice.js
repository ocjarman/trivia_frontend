import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isDesktop: false,
  showUsers: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setShowUsers: (state, action) => {
      state.showUsers = !state.showUsers;
    },
    deleteUser: (state, action) => {
      const userToDeleteId = action.payload;
      state.users = state.users.filter((user) => user.id !== userToDeleteId);
    },
    setDesktop: (state, action) => {
      state.isDesktop = action.payload;
    },
  },
});

export const { setUsers, deleteUser, setShowUsers, setDesktop } =
  usersSlice.actions;
export default usersSlice.reducer;
