import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/constants/common";
import { cardDataProps } from "@/constants/types";

export const productSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6566e6c264fcff8d730f450c.mockapi.io/redux-data",
  }),
  tagTypes: ["card"],
  endpoints: (builder) => ({
    getProducts: builder.query<cardDataProps[], void>({
      query: () => "/card",
      transformResponse: (res: cardDataProps[]) => res.reverse(),
      providesTags: ["card"],
    }),
    addProduct: builder.mutation<cardDataProps, FormData>({
      query: (formData) => {
        return {
          url: "/card",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["card"],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productSlice;
