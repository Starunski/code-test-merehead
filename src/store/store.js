import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/users.reducer";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
