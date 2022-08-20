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
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeState, changeToken } = authSlice.actions;

export default authSlice.reducer;
