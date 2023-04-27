import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeadAdmin } from 'components/Header/HeaderAdmin';

const LayoutAdmin = () => {
  return (
    <>
      <HeadAdmin />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LayoutAdmin;
