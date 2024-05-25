import { Card, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { emailPasswordLogin } from '../../store';
import { useNavigate } from 'react-router-dom';
import { RouteMap } from '../../routes';
import useAppDispatch, { STATUS } from '../../hooks/useAppDispatch';
import { Button } from '../../components';

const useLoginState = () => {
  const [loginState, setLoginState] = useState({ email: '', password: '', name: '' });

  const setEmail = (email) => {
    setLoginState({
      ...loginState,
      email,
    });
  };

  const setPassword = (password) => {
    setLoginState({
      ...loginState,
      password,
    });
  };

  return { ...loginState, setEmail, setPassword };
};

const LoginModal = () => {
  const { email, password, setEmail, setPassword } = useLoginState();
  const [status, dispatch] = useAppDispatch(emailPasswordLogin);
  const navigator = useNavigate();

  const formSubmitHandler = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    dispatch({ email, password });
  };

  return (
    <Card className="p-3">
      <Typography variant="h6" align="center">
        Login
      </Typography>
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col gap-3 self-center justify-center items-center"
      >
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />

        <Button
          text={'Sumbit'}
          variant="contained"
          type="submit"
          loading={status == STATUS.InProgress}
        />
        <Button
          variant="contained"
          text="Not registered! Sign Up"
          onClick={() => navigator(RouteMap.Auth.SIGNUP)}
        />
      </form>
    </Card>
  );
};

export const Login = () => (
  <div className="flex flex-1 justify-center items-center">
    <LoginModal />
  </div>
);
