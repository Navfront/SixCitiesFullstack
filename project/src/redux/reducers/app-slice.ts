import { createSlice } from '@reduxjs/toolkit';

interface CurrentLocation {
  lat: number;
  lng: number;
  zoom: number;
}

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    currentCityLocation: {
      lat: 0,
      lng: 0,
      zoom: 0,
    },
  },
  reducers: {
    setActiveCity: (state, action: { payload: CurrentLocation }) => {
      state.currentCityLocation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCity } = appSlice.actions;

export default appSlice.reducer;
