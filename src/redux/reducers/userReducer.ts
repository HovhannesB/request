import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Storage from "../../helpers/Storage/Storage";
import { LoginInput } from "../../pages/login/components/LoginForm/LoginForm";
import { loginQuery } from "../../queries/loginQuery";
import { RequestStatus } from "../../types/RequestStatus";

export interface User {
  firstName: string | null;
  lastName: string | null;
  token: string | null;
}

export interface UserState {
  value: User | null;
  status: RequestStatus;
}

const initialState: UserState = {
  value: Storage.getUser(),
  status: RequestStatus.IDLE,
};

export const loginAsync = createAsyncThunk(
  "users/loginUser",
  async (input: LoginInput) => {
    const response = await loginQuery(input);
    // The value we return becomes the `fulfilled` action payload
    return response.data as User;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = RequestStatus.LOADING;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = RequestStatus.IDLE;
        Storage.setUser(action.payload);
        state.value = action.payload;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = RequestStatus.FAILED;
      });
  },
});

export const selectUser = (state: RootState) => state.user.value;

export const processingLogin = (state: RootState) => state.user.status;

export default userSlice.reducer;
