import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ServiceApi from '../api/service-api';
import authSlice from './reducers/auth-slice';
import citySlice from './reducers/city-slice';

export const api = new ServiceApi('http://sixcities.navfront.ru/api');

const rootReducer = combineReducers({
  auth: authSlice,
  cities: citySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
