import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    role: "",
    userId: "",
  },
  reducers: {
    login: (state, { payload: { email, name, role, userId } }) => {
      state.email = email;
      state.name = name;
      state.role = role;
      state.userId = userId;
    },
    logout: (state) => {
      state.email = "";
      state.name = "";
      state.role = "";
      state.userId = "";
    },
  },
});

export const { login, logout } = userDetailsSlice.actions;
