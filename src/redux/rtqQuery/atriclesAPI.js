import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const articleApi = createApi({
  reducerPath: "articleQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://659bbe75d565feee2dab9b15.mockapi.io/'
  }),
  endpoints: builder => ({
    getArticles: builder.query({
      query: () => 'articles'
    }),
  }),
})

export const { useGetArticlesQuery } = articleApi