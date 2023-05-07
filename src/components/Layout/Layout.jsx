import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Head } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { useShowModal } from 'globalState/globalState';
import { Call } from 'components/Call/Call';
import { Modal } from 'components/Modal/Modal';
import { SendPhone } from 'components/SendPhone/SendPhone';
import { LoadPage } from 'components/LoadSpiner/LoadPage';

const Layout = () => {
  const { isShowModal } = useShowModal();
  return (
    <>
      <Head />

      <Suspense fallback={<LoadPage />}>
        <Outlet />
      </Suspense>

      <Footer />
      <Call />

      {isShowModal && (
        <Modal>
          <SendPhone />
        </Modal>
      )}
    </>
  );
};

export default Layout;
