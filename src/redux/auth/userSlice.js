import { createSlice } from '@reduxjs/toolkit';
import { userLogOut, userLogin, userRefresh, userRegister } from './operations';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
  isLoading: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // реєстрація користувача
      .addCase(userRegister.pending, state => {
        state.isLoading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // логування користувача
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // оновити користувача
      .addCase(userRefresh.pending, state => {
        state.isLoading = true;
      })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(userRefresh.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // вилоговування користувача
      .addCase(userLogOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(userLogOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const authReducer = authSlice.reducer;
