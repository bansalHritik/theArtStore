import { Button, Input, InputLabel } from "@mui/material";
import { useState } from "react";

const useLoginState = (initialState) => {
  const [loginState, setLoginState] = useState({ email: "", password: "" });

  const { email, password } = loginState;

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

  return { email, password, setEmail, setPassword };
};

export const LoginModal = () => {
  const { email, password, setEmail, setPassword } = useLoginState();

  const formSubmitHandler = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <InputLabel htmlFor="">Password</InputLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export const LoginPage = () => (
  <div>
    <LoginModal />
  </div>
);