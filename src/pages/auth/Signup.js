import { Card, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailPasswordSignUp } from '../../store';
import { useNavigate } from 'react-router-dom';
import { RouteMap } from '../../routes';
import { Button } from '../../components';
import useAppDispatch, { STATUS } from '../../hooks/useAppDispatch';

export const Signup = () => {
  const [userDetail, setUserDetail] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const [signupStatus, dispatch] = useAppDispatch(emailPasswordSignUp);

  return (
    <div className="flex flex-1 justify-center items-center">
      <Card variant="outlined" className="p-3">
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(userDetail);
          }}
          className="flex flex-1 flex-col gap-3 items-center justify-center"
        >
          <Typography variant="h6">Create New Account</Typography>
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
          <Button
            variant="contained"
            type="submit"
            text="Submit"
            loading={signupStatus == STATUS.InProgress}
          />

          <Button
            variant="contained"
            text="Already a user ? Sign In"
            onClick={() => navigate(RouteMap.Auth.LOGIN)}
          />
        </form>
      </Card>
    </div>
  );
};
