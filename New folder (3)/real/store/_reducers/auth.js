import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
  _id: "",
  avatar: "",
  email: "",
  user: "",
  token: "",
  language: 1,
  timestamp: new Date().getTime(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state._id = action.payload.user.id;
      state.email = action.payload.user.email,
      state.username = action.payload.username,
      state.token = action.payload.access_token,
      state.tokenExpire = action.payload.expires_in,
      state.library_count = action.payload.library_count;
      state.language = action.payload.user.language;
      state.avatar = action.payload.user.avatar_url;
    },
    logout: (state, action) => {
      state.loggedIn = false;
      state._id = "";
      state.email = "";
      state.username = "";
      state.token = "";
      state.tokenExpire = "";
      state.library_count = "";
      state.language = 1;
      state.avatar = "";
    },
  },
});
export const { login, logout,  } = authSlice.actions;
export const getAuth = (state) => state?.auth;
export const getLanguage = (state) => state?.auth.language;
export default authSlice.reducer;
