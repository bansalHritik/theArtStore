import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userDetailsSlice';

export * from './slices/userDetailsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
