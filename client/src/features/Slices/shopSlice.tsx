import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ShopType } from '../../types/shopTypes';

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

export const getShopThunk = createAsyncThunk('shop/fetch', async (name) =>
  axios<ShopType[]>(`/shop/${name}`)
    .then((res) => res.data)
    .catch((err) => console.log(err)),
);

const shopSlice = createSlice({
  name: 'shopSlice',
  initialState,
  reducers: {
    filterShop(state, action) {
      console.log(action.payload);
      state.shop = state.shop.filter((shop) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        shop.name.includes(action.payload),
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShopThunk.fulfilled, (state, action) => {
      state.shop = action.payload;
      console.log(state.shop, 'action payload');
    });
  },
});
export const { filterShop } = shopSlice.actions;
export default shopSlice.reducer;
