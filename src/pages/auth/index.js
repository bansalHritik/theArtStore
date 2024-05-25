import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteMap } from '../../routes';
import { Login } from './Login';
import { Signup } from './Signup';

export const AuthenticationNavigator = () => {
  return (
    <Routes>
      <Route path={RouteMap.Auth.LOGIN} Component={Login} />
      <Route path={RouteMap.Auth.SIGNUP} Component={Signup} />
      <Route path="*" element={<Navigate to={RouteMap.Auth.LOGIN} replace={true} />} />
    </Routes>
  );
};
