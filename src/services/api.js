// api.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1' }),
  endpoints: (builder) => ({
    getWeatherForecast: builder.query({
      query: (city) =>
        `forecast.json?key=92a45e70d57f43dbbe9142954233107&q=${city}&days=5`,
    }),
  }),
})

export const { useGetWeatherForecastQuery } = weatherApi
