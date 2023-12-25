/* eslint-disable @typescript-eslint/no-explicit-any */
import { CourseDataResponse } from '../../types';
import { apiSlice } from '../api/apiSlice';

const courseApi = apiSlice
  .enhanceEndpoints({ addTagTypes: ['Course'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCourses: builder.query({
        query: () => ({
          method: 'GET',
          url: '/courses',
        }),
        providesTags: ['Course'],
      }),
      getSingleCourses: builder.query<
        CourseDataResponse,
        string | undefined
      >({
        query: (id: string) => ({
          method: 'GET',
          url: `/courses/${id}`,
        }),
        providesTags: ['Course'],
      }),
      updateSingleCourses: builder.mutation({
        query: ({ id, data }: any) => ({
          url: `/courses/${id}`,
          method: 'PUT',
          body: data,
        }),
        invalidatesTags: ['Course'],
      }),
      deleteCourses: builder.mutation({
        query: (id: any) => ({
          url: `/courses/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Course'],
      }),
      addCourses: builder.mutation({
        query: (data) => ({
          method: 'POST',
          url: '/courses',
          body: data,
        }),
        invalidatesTags: ['Course'],
        // onQueryStarted(arg, { dispatch, queryFulfilled }) {
        //   console.log(arg, 'arg');
        //   //deleting the task optimistically
        //   const patchResult = dispatch(
        //     courseApi.util.updateQueryData(
        //       'getCourses',
        //       undefined,
        //       (draft) => {
        //         const draftIndex = draft.findIndex(
        //           (task) => task.name === arg.name
        //         );
        //         // console.log(arg, "draftIndex");
        //         if (draftIndex !== -1) {
        //           draft.splice(draftIndex, 1);
        //         }
        //       }
        //     )
        //   );
        //   //undo deletion in case of failure
        //   queryFulfilled.catch(patchResult.undo);
        // },
      }),
    }),
  });

export const {
  useGetCoursesQuery,
  useAddCoursesMutation,
  useGetSingleCoursesQuery,
  useUpdateSingleCoursesMutation,
  useDeleteCoursesMutation,
} = courseApi;
