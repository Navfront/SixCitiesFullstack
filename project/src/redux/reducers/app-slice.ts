import { createSlice } from '@reduxjs/toolkit';
import { FullCity } from './../../../types/city';

interface CurrentTarget {
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
    currentCity: {
      _id: '',
      name: '',
      location: {
        _id: '',
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
    },
  },
  reducers: {
    setTarget: (state, action: { payload: CurrentTarget }) => {
      state.currentTarget = action.payload;
    },

    setCurrentCity: (state, action: { payload: FullCity }) => {
      state.currentCity = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTarget, setCurrentCity } = appSlice.actions;

export default appSlice.reducer;
