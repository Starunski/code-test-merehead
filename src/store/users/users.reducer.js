import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loaded: false,
  },
  reducers: {
    getUsersSuccess: (state, action) => {
      state.list = action.payload;
      state.loaded = true;
    },
    addUserSuccess: (state, action) => {
      state.list.push(action.payload);
    },
    deleteUserSuccess: (state, action) => {
      state.list = action.payload;
    },
    editUserSuccess: (state, action) => {
      const index = state.list.findIndex(
        (user) => user.id === action.payload.id
      );
      state.list[index] = action.payload;
    },
  },
});

export const {
  getUsersSuccess,
  addUserSuccess,
  deleteUserSuccess,
  editUserSuccess,
} = usersSlice.actions;

export const selectUsers = (state) => state.users.list;

export const selectUser = (state, id) => {
  const users = state.users.list;
  if (!users.length) {
    return {};
  }

  const index = users.findIndex((user) => user.id === id);
  return users[index] || {};
};

export default usersSlice.reducer;
