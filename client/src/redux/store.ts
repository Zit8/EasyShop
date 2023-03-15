import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from '../features/Slices/userSlice';
import shopSlice from '../features/Slices/shopSlice';
import productsSlice from '../features/Slices/productsSlice';
// eslint-disable-next-line import/no-named-as-default
import shoppingCartSlice from '../features/Slices/shoppingCartSlice';

const rootReducer = combineReducers({
  userData: userSlice,
  shop: shopSlice,
  products: productsSlice,
  shoppingCart: shoppingCartSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
