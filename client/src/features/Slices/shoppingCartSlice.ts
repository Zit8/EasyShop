import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { CartProductType, OrderType, ProductType } from '../../types';

type InitSlice = {
  shoppingCart: OrderType;
};

const initialState: InitSlice = {
  shoppingCart: {
    products: [],
    userId: 0,
    deliveryAddress: '',
    selfDelivery: false,
    deliveryData: '',
    deliveryTime: '',
  },
};

export const getShoppingCartThunk = createAsyncThunk<
  OrderType[],
  string | undefined
>('products/fetch', async (name: string | undefined) =>
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  axios<OrderType[]>(`/shop//${name}/order/`)
    .then((res) => res.data)
    .catch(() => {
      throw new Error();
    }),
);

export const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductType>) => {
      state.shoppingCart.products.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      // либо так:  Product["id"]
      state.shoppingCart.products.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
