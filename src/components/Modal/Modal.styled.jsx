import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  max-width: calc(100% - 40px);
  max-height: calc(100% - 40px);
  position: relative;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 40px); */

  /* @media screen and (min-width: 600px) {
    width: 550px;
  } */
`;

export const ButtonClose = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: -15px;
  right: -15px;
  cursor: pointer;
  transition: transform 350ms ease;

  :hover {
    transform: scale(1.1);
  }
`;

export const Cross = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 20px;
  height: 2px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.black};

  :after {
    content: '';
    width: 20px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    background-color: ${({ theme }) => theme.color.black};
  }
`;