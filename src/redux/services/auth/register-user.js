import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorCapture } from "../error/error-handler";
import api from "../../../utils/axios-instance";

const registerUser = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/auth/register", data);
      return res;
    } catch (error) {
      let errMsg = errorCapture(
        error,
        "Account creation was unsuccessful, please try again later"
      );
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export default registerUser;
