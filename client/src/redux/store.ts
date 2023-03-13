import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from '../features/Slices/userSlice';
import shopSlice from '../features/Slices/shopSlice';
import productsSlice from '../features/Slices/productsSlice';

const rootReducer = combineReducers({
  userData: userSlice,
  shop: shopSlice,
  products: productsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
