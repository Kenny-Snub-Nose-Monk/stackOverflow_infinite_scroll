import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const stackExchangeApi = createApi({
  reducerPath: "stackExchangeApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.stackexchange.com/2.3'}),
  endpoints: (builder) =>({

    //GET Tags
    getTags: builder.query({
      query: () => "/tags?order=desc&sort=popular&site=stackoverflow"
    }) ,

    //GET Questions
    getQuestions: builder.query({
      query: ({page, tagged}) => {
        
        //prevent c# , since # will be translated to %23
        return `questions?page=${page}&order=desc&sort=activity&tagged=${encodeURIComponent(tagged)}&site=stackoverflow`
      }
    })

  })
})

export const {
  useGetQuestionsQuery,
  useGetTagsQuery
} = stackExchangeApi


