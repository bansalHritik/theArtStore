import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as ProductCollection from '../../firebase/firestore/product';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, { payload }) => {
      state.products = state.products.filter((prod) => prod.id == payload.id);
      state.products.push(payload);
    },
    addProducts: (state, { payload: newProducts }) => {
      newProducts.forEach((newProd) => {
        state.products = state.products.filter((prod) => prod.id != newProd.id);
        state.products.push(newProd);
      });
    },
    removeProduct: (state, { payload: { id } }) => {
      state.products = state.products.filter((prod) => prod.id != id);
    },
  },
  extraReducers(builder) {
    builder.addCase(saveProduct.fulfilled, (state, { payload }) => {
      state.products.push(payload);
    });
  },
});
export const { addProduct, addProducts, removeProduct } = productSlice.actions;
export default productSlice.reducer;
export const saveProduct = createAsyncThunk(
  'product/save-product',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    //save to db
    const result = ProductCollection.add(payload);
    return fulfillWithValue?.(result);
  },
);

export const getProducts = createAsyncThunk(
  'products/get-products',
  async (_, { rejectWithValue, fulfillWithValue, dispatch }) => {
    const products = await ProductCollection.getAll();
    dispatch(addProducts(products));
    return fulfillWithValue?.(products);
  },
);

export const getProduct = createAsyncThunk(
  'products/get-product',
  async (prodId, { fulfillWithValue, dispatch }) => {
    const productDetail = await ProductCollection.get(prodId);
    dispatch(addProduct(productDetail));
    return fulfillWithValue?.(productDetail);
  },
);
