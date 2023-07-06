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
`;
