import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { ShopType } from '../../types';

const initialState: ShopType = {
  id: undefined,
  name: '',
  description: '',
  logo: '',
  city: '',
  address: '',
  phone: '',
  email: '',
  startTime: '',
  finishingTime: '',
  weekdays: '',
  userId: 0,
  ratingLink: '',
  urlName: '',
};

export const createShopActionThunk = createAsyncThunk<ShopType>(
  'createshop',
  async (data) =>
    axios
      .post<ShopType>('/createshop', data)
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      }),
);

const createShopSlice = createSlice({
  name: 'createShopSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createShopActionThunk.fulfilled, (state, action) => {
      state.shop = action.payload;
    });
  },
});

export default createShopSlice.reducer;
