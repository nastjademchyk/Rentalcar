import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './carsSlice.js';
import filterReducer from './filterSlice.js';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filterReducer,
  },
});
