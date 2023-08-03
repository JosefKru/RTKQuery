// store.js

import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './api';

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
