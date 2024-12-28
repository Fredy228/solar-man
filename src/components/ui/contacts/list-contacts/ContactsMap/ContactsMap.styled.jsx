import styled from 'styled-components';

export const InnerMap = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 1199px) {
    bottom: 100px;
  }

  @media screen and (max-width: 999px) {
    bottom: 0;
  }

  @media screen and (max-width: 767px) {
    top: -250px;
    left: 0;
  }
`;

export const WrapperMap = styled.div`
  width: 650px;
  height: 350px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  position: relative;

  :after {
    content: 'Завантаження Google Map...';
    font-size: 14px;
    color: ${({ theme }) => theme.color.g2};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 1199px) {
    width: 500px;
    height: 280px;
  }

  @media screen and (max-width: 999px) {
    width: 340px;
    height: 420px;
  }

  @media screen and (max-width: 767px) {
    max-width: 360px;
    width: 100%;
    height: 220px;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
`;
