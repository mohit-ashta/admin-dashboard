import { API_URL } from "@/constants/common";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface AddUserData {
  name: string;
  email: string;
  password: string;
}

interface AddUserResponse {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const userSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/register",
      providesTags: ["User"],
    }),
    addUser: builder.mutation<AddUserResponse, AddUserData>({
      query: (data) => ({
        url: `/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useAddUserMutation, useGetUsersQuery } = userSlice;