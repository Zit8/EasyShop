import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from '../features/Slices/userSlice';
import shopSlice from '../features/Slices/shopSlice';
import productsSlice from '../features/Slices/productsSlice';
// eslint-disable-next-line import/no-named-as-default
import shoppingCartSlice from '../features/Slices/shoppingCartSlice';
import createShopSlice from '../features/Slices/createShopSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  userData: userSlice,
  shop: shopSlice,
  products: productsSlice,
  shoppingCart: shoppingCartSlice,
  createShop: createShopSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);

export default store;
