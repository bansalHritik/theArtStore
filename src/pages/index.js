import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './app/Home';
import { LoginPage } from './auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from '../firebase/firebase.utils';
import { saveUserDetail } from '../store';
import { Signup } from './auth/Signup';
import { RouteMap } from '../routes';

export const AppNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged((user) => {
      if (user) {
        const { email, displayName, uid: userId } = user;
        console.log('Auth State Changed', email, displayName, userId);
        dispatch(saveUserDetail({ email, userId }));
      }
    });
  }, []);

  const user = useSelector((state) => state?.user?.userId);
  console.log('User', user);
  return (
    <div className="h-screen">
      {user ? <MainApplicationNavigator /> : <AuthenticationNavigator />}
    </div>
  );
};

const MainApplicationNavigator = () => {
  return (
    <Routes>
      <Route path={RouteMap.App.HOME} Component={Home} />
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
