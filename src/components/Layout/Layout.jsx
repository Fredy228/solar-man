import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Head } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Head />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};

export default Layout;
