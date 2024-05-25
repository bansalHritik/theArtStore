import { useSelector } from 'react-redux';
import useAppDispatch, { STATUS } from './useAppDispatch';
import { getProduct } from '../store/slices/productSlice';

export const useProductDetails = ({ productId }) => {
  const productDetails = useSelector((state) =>
    state.product?.products.find((prod) => prod.id == productId),
  );

  const [status, dispatchGetProduct] = useAppDispatch(getProduct);

  if (status == STATUS.Idle && !productDetails) {
    dispatchGetProduct(productId);
  }

  return [status, productDetails];
};
