import { createSlice } from "@reduxjs/toolkit";
import { removeLocalStorage, setLocalStorage } from "../../helper/localStorage";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
      setLocalStorage("user", JSON.stringify(action.payload));
    },
    addUserAfterReload(state, action) {
      state.user = action.payload;
    },
    logoutUser(state, action) {
      removeLocalStorage("user");
      state.user = {};
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
