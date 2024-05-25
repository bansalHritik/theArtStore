import { useParams } from 'react-router-dom';
import { useProductDetails } from '../../hooks/useProductDetails';
import { STATUS } from '../../hooks/useAppDispatch';

export const ProductDetail = () => {
  const { productId } = useParams();
  const [state, productDetails] = useProductDetails({ productId });
  return (
    <div>
      <p>{state}</p>
      <p>{productDetails?.name}</p>
    </div>
  );
};
