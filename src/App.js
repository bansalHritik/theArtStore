import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login/Login";
import { Provider } from "react-redux";
import store from "./store";

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route Component={LoginPage} path="/login" />
      </Routes>
    </BrowserRouter>
  </Provider>
);
