import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow, Cross, ButtonClose } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        toggleModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
        <ButtonClose onClick={toggleModal}>
          <Cross></Cross>
        </ButtonClose>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
