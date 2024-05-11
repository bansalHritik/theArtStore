import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as ProductCollection from '../../firebase/firestore/product';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push(payload);
    },
    addProducts: (state, { payload }) => {
      console.log('Add Products', payload);
      state.products = state.products.concat(payload);
    },
    removeProduct: (state, { payload: { id } }) => {
      state.products = state.products.filter((prod) => prod.id != id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(saveProduct.fulfilled, (state, { payload }) => {
        state.products.push(payload);
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products.concat;
      });
  },
});

export const saveProduct = createAsyncThunk(
  'product/save-product',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      //save to db
      const result = ProductCollection.add(payload);
      fulfillWithValue?.(result);
    } catch (error) {
      rejectWithValue?.(error);
    }
  },
);

export const getProducts = createAsyncThunk(
  'products/get-products',
  async (_, { rejectWithValue, fulfillWithValue, dispatch }) => {
    try {
      const products = await ProductCollection.getAll();
      dispatch(addProducts(products));
      fulfillWithValue?.(products);
    } catch (error) {
      rejectWithValue?.(error);
    }
  },
);

export const { addProduct, addProducts, removeProduct } = productSlice.actions;
export default productSlice.reducer;
