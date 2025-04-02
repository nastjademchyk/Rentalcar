import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './сarsSlice.js';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
