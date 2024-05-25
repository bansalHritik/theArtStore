import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  initialState: [],
  name: 'cart',
  reducers: {
    addItemToCart: function () {},
  },
});
export const {} = cartSlice.actions;
export default cartSlice.reducer;
