import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AppNavigator } from './pages';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <AppNavigator />
    </BrowserRouter>
  </Provider>
);
