import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { HeadAdmin } from 'components/Header/HeaderAdmin';
import { useStoreUser } from 'globalState/globalState';
import { LoadPage } from 'components/LoadSpiner/LoadPage';

const LayoutAdmin = () => {
  const { setUser } = useStoreUser();
  useEffect(() => {
    const dataUser = localStorage.getItem('userData');
    if (!dataUser) return;

    setUser({ ...JSON.parse(dataUser) });
  }, [setUser]);
  return (
    <>
      <HeadAdmin />

      <Suspense fallback={<LoadPage />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LayoutAdmin;
