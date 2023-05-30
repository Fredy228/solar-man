import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import LayoutAdmin from './Layout/LayoutAdmin';
import PrivateRoute from './Routes/PrivateRoute';
import RestrictedRoute from './Routes/RestrictedRoute';
import { useShowModal } from 'globalState/globalState';

const Home = lazy(() => import('pages/Home/Home'));
const LoginAdmin = lazy(() => import('adminPage/LoginAdmin/LoginAdmin'));
const AdminProfile = lazy(() => import('adminPage/AdminProfile/AdminProfile'));
const StoreDB = lazy(() => import('adminPage/StoreDB/StoreDB'));
const Portfolio = lazy(() => import('adminPage/Portfolio/Portfolio'));
const PortfolioId = lazy(() => import('adminPage/Portfolio/PortfolioId'));
const CreateProduct = lazy(() =>
  import('adminPage//StoreDB/CreateProduct/CreateProduct')
);

const ForEnterprises = lazy(() => import('pages/OurServices/ForEnterprises'));
const ForHome = lazy(() => import('pages/OurServices/ForHome'));
const ForInvestment = lazy(() => import('pages/OurServices/ForInvestment'));
const ForBackupPower = lazy(() => import('pages/OurServices/ForBackupPower'));

const AboutUs = lazy(() => import('pages/AboutUs/AboutUs'));
const Projects = lazy(() => import('pages/Projects/Projects'));
const Store = lazy(() => import('pages/Store/Store'));
const Thanks = lazy(() => import('pages/Thanks/Thanks'));
export const App = () => {
  const { isShowModal } = useShowModal();

  useEffect(() => {
    if (isShowModal) document.body.classList.add('no-scroll');
    if (!isShowModal) document.body.classList.remove('no-scroll');
  }, [isShowModal]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/enterprises" element={<ForEnterprises />} />
        <Route path="/home" element={<ForHome />} />
        <Route path="/investment" element={<ForInvestment />} />
        <Route path="/backup-power" element={<ForBackupPower />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/store" element={<Store />} />
        <Route path="/thanks" element={<Thanks />} />

        <Route path="*" element={'Not found 404'} />
      </Route>
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route
          index
          element={
            <RestrictedRoute
              redirectTo="/admin/profile"
              component={LoginAdmin}
            />
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute redirectTo="/admin" component={AdminProfile} />
          }
        />
        <Route
          path="goods"
          element={<PrivateRoute redirectTo="/admin" component={StoreDB} />}
        />
        <Route
          path="portfolio"
          element={<PrivateRoute redirectTo="/admin" component={Portfolio} />}
        />
        <Route
          path="portfolio/:postId"
          element={<PrivateRoute redirectTo="/admin" component={PortfolioId} />}
        />
        <Route
          path="goods/:goodCreate"
          element={
            <PrivateRoute redirectTo="/admin" component={CreateProduct} />
          }
        />
        <Route
          path="goods/update/:typeGood"
          element={
            <PrivateRoute redirectTo="/admin" component={CreateProduct} />
          }
        />
      </Route>
    </Routes>
  );
};
