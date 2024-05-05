import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { doLogout } from '../../store';

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(doLogout());
        }}
      >
        Logout
      </Button>
    </div>
  );
};
