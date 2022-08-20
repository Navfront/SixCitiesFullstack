import { configureStore } from '@reduxjs/toolkit';
import ServiceApi from '../api/service-api';
import authSlice from './reducers/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
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
