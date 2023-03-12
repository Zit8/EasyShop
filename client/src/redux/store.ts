import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from '../features/Slices/userSlice';
import shopSlice from '../features/Slices/shopSlice';

const rootReducer = combineReducers({
  userData: userSlice,
  shop: shopSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
