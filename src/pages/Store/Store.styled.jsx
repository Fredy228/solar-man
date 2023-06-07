import styled from 'styled-components';

export const Inner = styled.div`
  margin-top: 90px;
  display: flex;
  position: relative;

  @media screen and (max-width: 1000px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
`;

export const WrapperStore = styled.div`
  flex: 1;
`;

export const WrapperFilter = styled.div`
  transition-property: visibility, width;
  transition-duration: 350ms;
  transition-timing-function: ease;

  width: ${({ isShow }) => (isShow ? '220px' : '0px')};
  overflow: ${({ isShow }) => (isShow ? 'initial' : 'hidden')};
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};

  @media screen and (max-width: 768px) {
    position: absolute;
  }
`;
