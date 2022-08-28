import { createSlice } from '@reduxjs/toolkit';

interface currentTarget {
  lat: number;
  lng: number;
  zoom: number;
}

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    currentTarget: {
      lat: 0,
      lng: 0,
      zoom: 0,
    },
  },
  reducers: {
    setActiveCity: (state, action: { payload: currentTarget }) => {
      state.currentTarget = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCity } = appSlice.actions;

export default appSlice.reducer;
