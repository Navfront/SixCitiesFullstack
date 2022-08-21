import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [],
  },
  reducers: {
    addCities: (state, action) => {
      state.cities = action.payload.cities;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCities } = citySlice.actions;

export default citySlice.reducer;
