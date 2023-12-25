import { apiSlice } from '../api/apiSlice';
import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
      // do something alongside api call but before request is sent
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          console.log(arg);
          const response = await queryFulfilled;
          // update localStorage
          localStorage.setItem('auth', JSON.stringify(response.data));
          // update redux state
          dispatch(userLoggedIn(response.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
      // do something alongside api call but before request is sent

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          console.log(arg);

          const response = await queryFulfilled;
          // update localStorage
          localStorage.setItem('auth', JSON.stringify(response.data));
          // update redux state
          dispatch(userLoggedIn(response.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
