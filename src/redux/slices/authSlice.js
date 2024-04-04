import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import registerUser from "../services/auth/register-user";
import loginUser from "../services/auth/login-user";

const initialState = {
  user: {},
  token: "",
  isLoggedIn: false,
  showGetStarted: true,
  isLoading: false,
  user: {},
  token: "",
  statusCode: undefined,
  errMsg: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthState: (state) => {
      Object.assign(state, initialState);
    },

    setErrMsg: (state, action) => {
      state.errMsg = action.payload;
    },
    setGetStarted: (state, action) => {
      state.showGetStarted = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // Reset both local and persisted state
      .addCase(PURGE, (state) => {
        Object.assign(state, initialState);
      })

      // register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.data.token;
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        state.errMsg = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload.msg;
        state.statusCode = action.payload.status;
        state.token = "";
      })

      //  login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data?.user;
        state.token = action.payload.data?.token;
        state.isLoggedIn = true;
        state.showGetStarted = false;
        state.errMsg = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload.msg;
        state.statusCode = action.payload?.status;
        state.token = action.payload.data.token;
      });
  },
});

export const { setErrMsg, setGetStarted, clearAuthState } = authSlice.actions;

export default authSlice.reducer;
