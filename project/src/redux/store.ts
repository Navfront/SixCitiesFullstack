import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ServiceApi from '../api/service-api';
import authSlice from './reducers/auth-slice';
import citySlice from './reducers/city-slice';

const rootReducer = combineReducers({
  auth: authSlice,
  cities: citySlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          serviceApi: new ServiceApi(
            process.env.REACT_APP_SURV ?? 'http://localhost:5500/'
          ),
        },
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
