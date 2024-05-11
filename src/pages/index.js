import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './app/Home';
import { LoginPage } from './auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '../firebase/firebase.utils';
import { saveUserDetail } from '../store';
import { Signup } from './auth/Signup';
import { RouteMap } from '../routes';
import { CircularProgress } from '@mui/material';
import { AddProducts } from './app/admin/AddProducts';

export const AppNavigator = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        const { email, displayName, uid: userId } = user;
        dispatch(saveUserDetail({ email, userId }));
      }
    });
  }, []);

  const user = useSelector((state) => state?.user?.userId);
  return (
    <div className="h-screen flex flex-1">
      {loading ? (
        <CircularProgress></CircularProgress>
      ) : user ? (
        <MainApplicationNavigator />
      ) : (
        <AuthenticationNavigator />
      )}
    </div>
  );
};

const MainApplicationNavigator = () => {
  return (
    <Routes>
      <Route path={RouteMap.App.HOME} Component={Home} />
      <Route path={RouteMap.App.ADD_PRODUCTS} Component={AddProducts} />
      <Route path="*" element={<Navigate to={RouteMap.App.HOME} replace={true} />} />
    </Routes>
  );
};

const AuthenticationNavigator = () => {
  return (
    <Routes>
      <Route path={RouteMap.Auth.LOGIN} Component={LoginPage} />
      <Route path={RouteMap.Auth.SIGNUP} Component={Signup} />
      <Route path="*" element={<Navigate to={RouteMap.Auth.LOGIN} replace={true} />} />
    </Routes>
  );
};
