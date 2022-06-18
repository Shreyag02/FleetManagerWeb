import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: "",
  currentUser: "",
  guestUser: "",
  allUsers: [],
  error: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    guestLoginSuccess: (state, action) => {
      state.guestUser = { ...action.payload };
      state.isLoading = false;
    },

    // emailSignUpFetch: (state) => {
    //   state.isLoading = true;
    // },
    // emailSignUpSuccess: (state, action) => {
    //   state.currentUser = { ...action.payload };
    //   state.isLoading = false;
    // },
    // emailSignUpFailure: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // emailLogInFetch: (state) => {
    //   state.isLoading = true;
    // },
    // emailLogInSuccess: (state, action) => {
    //   state.currentUser = { ...action.payload };
    //   state.isLoading = false;
    // },
    // emailLogInFailure: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // userLogoutFetch: (state) => {
    //   state.isLoading = true;
    // },
    // userLogoutSuccess: (state) => {
    //   state.currentUser = "";
    //   state.guestUser = "";
    //   state.isLoading = false;
    // },
    // userLogoutFailure: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    getChatUsersFetch: (state) => {
      state.isLoading = true;
    },
    getChatUsersSuccess: (state, action) => {
      state.allUsers = action.payload;
      state.isLoading = false;
    },
    getChatUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  guestLoginSuccess,

  // emailSignUpFetch,
  // emailSignUpSuccess,
  // emailSignUpFailure,

  // emailLogInFetch,
  // emailLogInSuccess,
  // emailLogInFailure,

  // userLogoutFetch,
  // userLogoutSuccess,
  // userLogoutFailure,

  getChatUsersFetch,
  getChatUsersSuccess,
  getChatUsersFailure,
} = userSlice.actions;

export default userSlice.reducer;
