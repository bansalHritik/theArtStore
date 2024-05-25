import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '../firebase';
import { saveUserDetail } from '../store';
import { CircularProgress } from '@mui/material';
import { AuthenticationNavigator } from './auth';
import { MainApplicationNavigator } from './app';
export const AppNavigator = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        dispatch(saveUserDetail({ name: user.name, email: user.email, userId: user.uid }));
      }
    });
  }, []);

  const user = useSelector((state) => state?.user?.userId);
  return (
    <div className="h-screen flex flex-1">
      {loading ? (
        <CircularProgress />
      ) : user ? (
        <MainApplicationNavigator />
      ) : (
        <AuthenticationNavigator />
      )}
    </div>
  );
};
