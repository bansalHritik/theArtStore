import { Button, Input, InputLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emailPasswordLogin } from '../../store';
import { useNavigate } from 'react-router-dom';
import { RouteMap } from '../../routes';

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
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const formSubmitHandler = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    dispatch(emailPasswordLogin({ email, password }))
      .unwrap()
      .catch((err) => {
        console.log('Error From SbmitFoem', err);
      });
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
        <Button variant="contained" type="submit">
          Submit
        </Button>
        <br />
        <Button variant="contained" onClick={() => navigator(RouteMap.Auth.SIGNUP)}>
          Not registered! Sign Up
        </Button>
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
