import { Suspense, useLayoutEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Head } from 'components/layout/header/Header';
import { Footer } from 'components/layout/footer/Footer';
import { useShowModal } from 'globalState/globalState';
import { Modal } from 'components/reused/modal/Modal';
import { SendPhone } from 'components/modals/send-phone/SendPhone';
import { LoadPage } from 'components/reused/load-spinner/LoadPage';
import { ToTop } from 'components/reused/to-top/ToTop';

const Layout = () => {
  const { isShowModal } = useShowModal();
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisibility);

  useLayoutEffect(() => {
    const updateComponentHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height;
        setHeaderHeight(height);
      }
    };

    updateComponentHeight();
    window.addEventListener('resize', updateComponentHeight);

    return () => {
      window.removeEventListener('resize', updateComponentHeight);
    };
  }, []);

  return (
    <>
      <Head headerHeight={headerHeight} ref={headerRef} />

      <Suspense fallback={<LoadPage />}>
        <Outlet />
      </Suspense>

      <Footer />

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
