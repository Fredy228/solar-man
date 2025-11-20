import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import LayoutAdmin from './layout/LayoutAdmin';
import PrivateRoute from './routes/PrivateRoute';
import RestrictedRoute from './routes/RestrictedRoute';
import { useShowModal } from 'globalState/globalState';
import { UtmTracker } from './utm-tracker/UtmTracker';

const Home = lazy(() => import('pages/Home/Home'));
const LoginAdmin = lazy(() => import('../admin-page/LoginAdmin/LoginAdmin'));
const AdminProfile = lazy(() =>
  import('../admin-page/AdminProfile/AdminProfile')
);
const StoreDB = lazy(() => import('../admin-page/StoreDB/StoreDB'));
const OrderHome = lazy(() => import('../admin-page/StoreDB/OrderHome'));
const Portfolio = lazy(() => import('../admin-page/Portfolio/Portfolio'));
const PortfolioId = lazy(() => import('../admin-page/Portfolio/PortfolioId'));
const CreateProduct = lazy(() =>
  import('../admin-page/StoreDB/CreateProduct/CreateProduct')
);

const ForEnterprises = lazy(() => import('pages/OurServices/ForEnterprises'));
const ForHome = lazy(() => import('pages/OurServices/ForHome'));
const ForInvestment = lazy(() => import('pages/OurServices/ForInvestment'));
const ForBackupPower = lazy(() => import('pages/OurServices/ForBackupPower'));

const AboutUs = lazy(() => import('pages/AboutUs/AboutUs'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Projects = lazy(() => import('pages/Projects/Projects'));
const ProjectByOne = lazy(() => import('pages/Projects/ProjectByOne'));
const Store = lazy(() => import('pages/Store/Store'));
const StoreByOne = lazy(() => import('pages/Store/StoreByOne'));
const Thanks = lazy(() => import('pages/Thanks/Thanks'));
const QuizGeneral = lazy(() => import('pages/Quiz/QuizGeneral'));
const QuizCompany = lazy(() => import('pages/Quiz/QuizCompany'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const GuideUk = lazy(() => import('pages/Guide/GuideUk'));
const GuideRu = lazy(() => import('pages/Guide/GuideRu'));
const PrivateUk = lazy(() => import('pages/Private/PrivateUk'));
const PrivateRu = lazy(() => import('pages/Private/PrivateRu'));
const GreenUk = lazy(() => import('pages/Green/GreenUk'));
const GreenRu = lazy(() => import('pages/Green/GreenRu'));
const SmallBusinessUk = lazy(() =>
  import('pages/SmallBusiness/SmallBusinessUk')
);
const SmallBusinessRu = lazy(() =>
  import('pages/SmallBusiness/SmallBusinessRu')
);
const BigBusinessUk = lazy(() => import('pages/BigBusiness/BigBusinessUk'));
const BigBusinessRu = lazy(() => import('pages/BigBusiness/BigBusinessRu'));

export const App = () => {
  const { isShowModal } = useShowModal();

  useEffect(() => {
    if (isShowModal) document.body.classList.add('no-scroll');
    if (!isShowModal) document.body.classList.remove('no-scroll');
  }, [isShowModal]);

  return (
    <>
      <UtmTracker />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/enterprises" element={<ForEnterprises />} />
          <Route path="/home" element={<ForHome />} />
          <Route path="/investment" element={<ForInvestment />} />
          <Route path="/backup-power" element={<ForBackupPower />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:idProject" element={<ProjectByOne />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:typeProduct" element={<StoreByOne />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/quiz" element={<QuizGeneral />} />
          <Route path="/quiz/company" element={<QuizCompany />} />
          <Route path="/quiz/social" element={<QuizGeneral />} />

          <Route path="/guide/uk" element={<GuideUk />} />
          <Route path="/guide/ru" element={<GuideRu />} />
          <Route path="/private/uk" element={<PrivateUk />} />
          <Route path="/private/ru" element={<PrivateRu />} />
          <Route path="/green/uk" element={<GreenUk />} />
          <Route path="/green/ru" element={<GreenRu />} />
          <Route path="/smallbusiness/uk" element={<SmallBusinessUk />} />
          <Route path="/smallbusiness/ru" element={<SmallBusinessRu />} />
          <Route path="/bigbusiness/uk" element={<BigBusinessUk />} />
          <Route path="/bigbusiness/ru" element={<BigBusinessRu />} />

          <Route path="*" element={<NotFound />} />
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
            element={
              <PrivateRoute redirectTo="/admin" component={PortfolioId} />
            }
          />
          <Route
            path="goods/:goodCreate"
            element={
              <PrivateRoute redirectTo="/admin" component={CreateProduct} />
            }
          />
          <Route
            path="goods/home/order"
            element={<PrivateRoute redirectTo="/admin" component={OrderHome} />}
          />
        </Route>
      </Routes>
    </>
  );
};
