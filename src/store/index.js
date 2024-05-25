import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userDetailsSlice';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

export * from './slices/userDetailsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
