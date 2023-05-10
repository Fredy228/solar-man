import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { HeadAdmin } from 'components/Header/HeaderAdmin';
import { useStoreUser } from 'globalState/globalState';
import { LoadPage } from 'components/LoadSpiner/LoadPage';
import { ToTop } from 'components/ToTop/ToTop';

const LayoutAdmin = () => {
  const { setUser } = useStoreUser();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisibility);

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
      {isVisible && <ToTop />}
    </>
  );
};

export default LayoutAdmin;
