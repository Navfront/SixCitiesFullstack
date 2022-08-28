import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ServiceApi from '../api/service-api';
import authSlice from './reducers/auth-slice';
import citySlice from './reducers/city-slice';
import appSlice from './reducers/app-slice';
import hotelSlice from './reducers/hotel-slice';

export const api = new ServiceApi(
  process.env.REACT_APP_SURV ?? 'https://sixcities.navfront.ru/api'
);

console.log(process.env.REACT_APP_SURV);

const rootReducer = combineReducers({
  auth: authSlice,
  cities: citySlice,
  hotels: hotelSlice,
  app: appSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
