import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { CartProductType, OrderType, ProductType } from '../../types';

type InitSlice = {
  shoppingCart: OrderType;
  totalPrice: number;
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
  totalPrice: 0,
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
      state.totalPrice += (action.payload.price * action.payload.orderCount);
    },
    removeItem: (state, action: PayloadAction<ProductType['id']>) => {
      const index = state.shoppingCart.products.findIndex((el) => el.id === action.payload)
      state.shoppingCart.products.splice(
        index,
        1,
      );
      state.totalPrice -=  state.shoppingCart.products[index].price;
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
