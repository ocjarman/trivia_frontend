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
      console.log("payload user", action.payload);
      const userToDeleteId = action.payload;
      console.log({ userToDeleteId });
      state.users = state.users.filter((user) => user.id !== userToDeleteId);
      console.log(state.users);
    },
  },
});

export const { setUsers, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
