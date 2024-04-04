import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorCapture } from "../error/error-handler";
import api from "../../../utils/axios-instance";

const loginUser = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const res = await api.post("/auth/login", data);
    return res;
  } catch (error) {
    let err = errorCapture(error, "Login was unsuccessful, please re-try");
    return thunkAPI.rejectWithValue(err);
  }
});

export default loginUser;
