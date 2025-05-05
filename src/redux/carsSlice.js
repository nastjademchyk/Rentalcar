import { createSlice } from '@reduxjs/toolkit';
import { getCars, getCarById, getBrands, getAllCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    allCars: [],
    carDetails: null,
    brands: [],
    totalCount: 0,
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

        const newCars = action.payload.cars.filter(
          newCar =>
            !state.cars.some(existingCar => existingCar.id === newCar.id)
        );

        state.cars = [...state.cars, ...newCars];
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || 'An error occurred while fetching cars';
      })
      .addCase(getAllCars.pending, state => {
        state.loading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.allCars = action.payload;
        state.loading = false;
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
