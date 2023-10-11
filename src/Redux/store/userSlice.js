import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
      window.localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser(state, action) {
      localStorage.removeItem("user");
      state.user = {};
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
