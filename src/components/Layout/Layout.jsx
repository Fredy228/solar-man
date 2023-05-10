import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Head } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { useShowModal } from 'globalState/globalState';
import { Call } from 'components/Call/Call';
import { Modal } from 'components/Modal/Modal';
import { SendPhone } from 'components/SendPhone/SendPhone';
import { LoadPage } from 'components/LoadSpiner/LoadPage';
import { ToTop } from 'components/ToTop/ToTop';

const Layout = () => {
  const { isShowModal } = useShowModal();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <>
      <Head />

      <Suspense fallback={<LoadPage />}>
        <Outlet />
      </Suspense>

      <Footer />
      <Call />

      {isVisible && <ToTop />}

      {isShowModal && (
        <Modal>
          <SendPhone />
        </Modal>
      )}
    </>
  );
};

export default Layout;
