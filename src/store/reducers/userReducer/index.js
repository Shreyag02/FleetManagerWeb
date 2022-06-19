import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: "",
  currentUser: "",
  error: null,
  vehicles: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    emailSignUpFetch: (state) => {
      state.isLoading = true;
    },
    emailSignUpSuccess: (state, action) => {
      state.currentUser = { ...action.payload };
      state.isLoading = false;
    },
    emailSignUpFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    emailLogInFetch: (state) => {
      state.isLoading = true;
    },
    emailLogInSuccess: (state, action) => {
      state.currentUser = { ...action.payload };
      state.isLoading = false;
    },
    emailLogInFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    userLogoutFetch: (state) => {
      state.isLoading = true;
    },
    userLogoutSuccess: (state) => {
      state.currentUser = "";
      state.isLoading = false;
    },
    userLogoutFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    getManagerVehiclesFetch: (state) => {
      state.isLoading = true;
    },
    getManagerVehiclesSuccess: (state, action) => {
      state.vehicles = action.payload;
      state.isLoading = false;
    },
    getManagerVehiclesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  emailSignUpFetch,
  emailSignUpSuccess,
  emailSignUpFailure,

  emailLogInFetch,
  emailLogInSuccess,
  emailLogInFailure,

  userLogoutFetch,
  userLogoutSuccess,
  userLogoutFailure,

  getManagerVehiclesFetch,
  getManagerVehiclesSuccess,
  getManagerVehiclesFailure,
} = userSlice.actions;

export default userSlice.reducer;
