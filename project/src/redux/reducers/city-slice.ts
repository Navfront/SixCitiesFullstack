import { createSlice } from '@reduxjs/toolkit';

export interface City {
  _id: string;
  name: string;
  location: string;
  hotels: Array<{}>;
}

export const citySlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [] as City[],
  },
  reducers: {
    addCities: (state, action) => {
      state.cities = action.payload.cities;
    },
    updateCities: (state, action) => {
      state.cities = [...state.cities, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCities, updateCities } = citySlice.actions;

export default citySlice.reducer;
