import { Button, Card, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { doLogout } from '../../store';
import { getProducts } from '../../store/slices/productSlice';
import { useEffect } from 'react';
import useAppDispatch, { STATUS } from '../../hooks/useAppDispatch';

export const Home = () => {
  const [productStatus, dispatch] = useAppDispatch();
  const products = useSelector((state) => state.product.products);
  console.log('Prodtcs', products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(doLogout());
        }}
      >
        Logout
      </Button>
      {productStatus === STATUS.InProgress ? (
        <CircularProgress />
      ) : (
        products.map((p) => (
          <Card key={p.id}>
            <p>{p.name}</p>
          </Card>
        ))
      )}
    </div>
  );
};
