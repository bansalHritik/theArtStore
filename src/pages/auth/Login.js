import { Button, CircularProgress, TextField } from '@mui/material';
import { useState } from 'react';
import { emailPasswordLogin } from '../../store';
import { useNavigate } from 'react-router-dom';
import { RouteMap } from '../../routes';
import useAppDispatch, { STATUS } from '../../hooks/useAppDispatch';

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
  const [status, dispatch] = useAppDispatch();
  const navigator = useNavigate();
  const formSubmitHandler = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    dispatch(
      emailPasswordLogin({ email, password }),
      (data) => {
        console.log('Login Success', data);
      },
      (err) => {
        console.log('Login Failed', err);
      },
    );
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
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
        <br />
        {status == STATUS.InProgress ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" type="submit">
            Submit
          </Button>
        )}
        <br />
        <Button variant="contained" onClick={() => navigator(RouteMap.Auth.SIGNUP)}>
          Not registered! Sign Up
        </Button>
        {status}
        {/* <Button onClick={logout}>Logout</Button> */}
      </form>
    </div>
  );
};

export const LoginPage = () => (
  <div>
    <LoginModal />
  </div>
);
