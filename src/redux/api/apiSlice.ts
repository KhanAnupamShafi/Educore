import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../../app/store';

// Create API Slice for hitting the API endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    prepareHeaders: async (headers, { getState }) => {
      const accessToken = (getState() as RootState)?.auth.accessToken;
      console.log((getState() as RootState)?.auth, 'accessToken');
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
