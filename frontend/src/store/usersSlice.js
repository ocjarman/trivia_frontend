import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action) => {
      const userToDeleteId = action.payload;
      state.users = state.users.filter((user) => user.id !== userToDeleteId);
    },
  },
});

export const { setUsers, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
