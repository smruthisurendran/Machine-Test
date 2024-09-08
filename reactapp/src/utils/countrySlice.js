import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
  return response.data;
});

const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending,(state) => {
      state.status = 'loading';
    })
    .addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    })
    .addCase(fetchCountries.rejected,(state) => {
      state.status = 'failed';
    })
  },
});

export default countrySlice.reducer;
