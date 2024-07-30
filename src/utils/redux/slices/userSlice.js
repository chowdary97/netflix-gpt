import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload)
      state = action.payload;
      return state
    },
    removeUser: (state, action) => {
      state = null;
      return state
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
