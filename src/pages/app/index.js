import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteMap } from '../../routes';
import { Home } from './Home';
import { AddProducts } from './admin/AddProducts';
import { ProductDetail } from './ProductDetail';
import { Navbar } from '../../components';
export const MainApplicationNavigator = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={RouteMap.App.HOME} Component={Home} />
        <Route path={RouteMap.App.ADD_PRODUCTS} Component={AddProducts} />
        <Route path={RouteMap.App.VIEW_PRODUCT_DETAIL} Component={ProductDetail} />
        <Route path="*" element={<Navigate to={RouteMap.App.HOME} replace={true} />} />
      </Routes>
    </>
  );
};
