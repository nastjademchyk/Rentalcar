import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const getCars = createAsyncThunk(
  'cars/getAllCars',
  async (filters, thunkAPI) => {
    try {
      const response = await axios.get('/cars', { params: filters });
      return {
        cars: response.data.cars,
        totalCount: response.data.totalCars,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCars = createAsyncThunk(
  'cars/getAllCarsFull',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  'cars/getCarById',
  async (carId, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${carId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBrands = createAsyncThunk(
  'brands/getAllBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/brands');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
