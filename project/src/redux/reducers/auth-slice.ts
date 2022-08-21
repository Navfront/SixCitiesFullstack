import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isAdmin: false,
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
    },
    resetState: (state) => {
      state.isAdmin = false;
      state.isAuth = false;
      state.token = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeState, changeToken, resetState } = authSlice.actions;

export default authSlice.reducer;
