import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userDetailsSlice';
import productReducer from './slices/productSlice';

export * from './slices/userDetailsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});
