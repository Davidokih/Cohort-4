import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://auth-user-yvxy.onrender.com/api",
  }),

  reducerPath: "userApi",
  tagTypes: ["user"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/user/signin",
        method: "POST",
        body,
      }),
    }),
    getAllUsers: builder.query({
      query: () => "/user/all",
    }),
    getSingleUser: builder.query({
      query: (id) => `/user/${id}`,
    }),
  }),
});

export const { useLoginUserMutation, useGetAllUsersQuery } = userSlice;

//   [companySlice.reducerPath]: companySlice.reducer,
