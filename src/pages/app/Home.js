import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { doLogout } from '../../store';
import { getProducts } from '../../store/slices/productSlice';
import { useEffect } from 'react';
import useAppDispatch, { STATUS } from '../../hooks/useAppDispatch';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';

const Card = ({ name, price, description }) => (
  <Card>
    <CardContent>
      <Typography>{name}</Typography>
      <Typography
    </CardContent>
  </Card>
)


export const Home = () => {
  const [productStatus, dispatchGetProduct] = useAppDispatch(getProducts);
  const [logoutStatus, dispatchLogout] = useAppDispatch(doLogout);
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatchGetProduct();
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          dispatchLogout();
        }}
        loading={logoutStatus === STATUS.InProgress}
        text="Logout"
      />
      {productStatus === STATUS.InProgress ? (
        <CircularProgress />
      ) : (
        products.map((p) => (
          <Card key={p.id} onClick={() => navigate(`/product/${p.id}`)}>
            <p>{p.name}</p>
          </Card>
        ))
      )}
    </div>
  );
};
