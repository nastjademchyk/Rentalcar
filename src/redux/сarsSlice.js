import { createSlice } from '@reduxjs/toolkit';
import { getCars, getCarById, getBrands } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    carDetails: null,
    brands: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(getCars.pending, state => {
        state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || 'An error occurred while fetching cars';
      })

      .addCase(getCarById.pending, state => {
        state.loading = true;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.carDetails = action.payload;
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          'An error occurred while fetching car details';
      })

      .addCase(getBrands.pending, state => {
        state.loading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || 'An error occurred while fetching brands';
      });
  },
});

export default carsSlice.reducer;
