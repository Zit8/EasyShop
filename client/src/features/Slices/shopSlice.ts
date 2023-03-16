import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { ShopType } from '../../types/shopTypes';

type InitSlice = {
  shop: ShopType;
};

const initialState: InitSlice = {
  shop: {
    id: 0,
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
  },
};

export const getShopThunk = createAsyncThunk<ShopType, string | undefined>(
  'shop/fetch',
  async (name: string | undefined) =>
    axios<ShopType>(`/shop/${name}`)
      .then((res) => res.data)
      .catch(() => {
        throw new Error('Error fetching');
      }),
);

const shopSlice = createSlice({
  name: 'shopSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShopThunk.fulfilled, (state, action) => {
      state.shop = action.payload;
      console.log(state.shop, 'action payload');
    });
  },
});
export default shopSlice.reducer;
