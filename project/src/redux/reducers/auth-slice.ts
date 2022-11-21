import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isAdmin: false,
    userId: '',
    email: '',
    username: '',
    token: '',
  },
  reducers: {
    changeToken: (state, action) => {
      state.token = action.payload.token;
    },
    changeState: (state, action) => {
      state.isAdmin = action.payload.isAdmin;
      state.isAuth = action.payload.isAuth;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.userId = action.payload.userId;
    },
    resetState: (state) => {
      state.userId = '';
      state.isAdmin = false;
      state.isAuth = false;
      state.token = '';
      state.email = '';
      state.username = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeState, changeToken, resetState } = authSlice.actions;

export default authSlice.reducer;
