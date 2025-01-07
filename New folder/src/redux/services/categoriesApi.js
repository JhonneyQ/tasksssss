import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `categories`,
      providesTags: ["Categories"],
    })
  }),
});

export const {
  useGetAllCategoriesQuery
} = categoriesApi;