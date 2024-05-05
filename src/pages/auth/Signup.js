import { Button, Card, Input, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailPasswordSignUp } from '../../store';
import { useNavigate } from 'react-router-dom';
import { RouteMap } from '../../routes';

export const Signup = () => {
  const [userDetail, setUserDetail] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card variant="outlined">
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(emailPasswordSignUp(userDetail));
          }}
        >
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            value={userDetail.email}
            onChange={({ target: { value } }) => setUserDetail({ ...userDetail, email: value })}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            value={userDetail.password}
            onChange={({ target: { value } }) => setUserDetail({ ...userDetail, password: value })}
          />
          <br />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <br />
          <Button variant="contained" onClick={() => navigate(RouteMap.Auth.LOGIN)}>
            Already a user ? Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
};
