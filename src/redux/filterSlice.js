import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: '',
  mileageFrom: '',
  mileageTo: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrandFilter(state, action) {
      state.brand = action.payload;
    },
    setPriceFilter(state, action) {
      state.price = action.payload;
    },
    setMileageFilter(state, action) {
      state.mileageFrom = action.payload.mileageFrom;
      state.mileageTo = action.payload.mileageTo;
    },
  },
});

export const { setBrandFilter, setPriceFilter, setMileageFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
