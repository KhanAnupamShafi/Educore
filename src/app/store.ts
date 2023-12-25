import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../redux/api/apiSlice';
import authSliceReducer from '../redux/auth/authSlice';

// Store Settings
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
