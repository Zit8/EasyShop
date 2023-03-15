import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { ProductType } from '../../types/productTypes';

type InitSlice = {
  products: ProductType[];
  filterProducts: ProductType[];
};

const initialState: InitSlice = {
  products: [],
  filterProducts: [],
};

export const getProductsThunk = createAsyncThunk<
  ProductType[],
  string | undefined
>('products/fetch', async (name: string | undefined) =>
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  axios<ProductType[]>(`/shop/${name}/products`)
    .then((res) => res.data)
    .catch(() => {
      throw new Error();
    }),
);
const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    productsNameInputFilter(state, action) {
      console.log(action.payload);
      state.filterProducts = state.products.filter((product) =>
        product.name.includes(action.payload),
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload;
      state.filterProducts = action.payload;
      console.log(state.products, 'action payload');
    });
  },
});

export const { productsNameInputFilter } = productsSlice.actions;
export default productsSlice.reducer;
