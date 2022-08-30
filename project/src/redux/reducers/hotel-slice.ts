import { createSlice } from '@reduxjs/toolkit';

export interface Hotel {
  _id: string;
  bedrooms: string;
  city: string;
  description: string;
  goods: string[];
  host: string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  preview_image: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export const hotelSlice = createSlice({
  name: 'hotels',
  initialState: {
    hotels: [] as Hotel[],
  },
  reducers: {
    addHotels: (state, action) => {
      state.hotels = [...action.payload];
    },
    updateHotel: (state, action) => {
      state.hotels = [...state.hotels, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addHotels, updateHotel } = hotelSlice.actions;

export default hotelSlice.reducer;
