import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow, Cross, ButtonClose } from './Modal.styled';
import { useShowModal } from 'globalState/globalState';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  const { toggleModal } = useShowModal();

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        toggleModal(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      toggleModal(false);
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
        <ButtonClose onClick={() => toggleModal(false)}>
          <Cross></Cross>
        </ButtonClose>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
