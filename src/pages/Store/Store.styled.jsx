import styled from 'styled-components';

export const Inner = styled.div`
  margin-top: 90px;
  display: flex;
  position: relative;
  align-items: start;
  min-height: calc(100vh - 300px);

  @media screen and (max-width: 999px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 70px;
  }
`;

export const WrapperStore = styled.div`
  flex: 1;
  margin-bottom: 15px;
`;

export const WrapperFilter = styled.div`
  transition-property: visibility, width, left;
  transition-duration: 350ms;
  transition-timing-function: ease;
  padding: 20px 15px;
  background: radial-gradient(
    186.93% 102.34% at 81.46% 7.95%,
    #fff8de 0%,
    #dceeff 100%
  );
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;

  @media screen and (min-width: 1000px) {
    margin-top: 80px;
    width: ${({ isShow }) => (isShow ? '220px' : '0px')};
    overflow: ${({ isShow }) => (isShow ? 'initial' : 'hidden')};
    visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  }

  @media screen and (max-width: 999px) {
    position: fixed;
    left: ${({ isShowFilter }) => (!isShowFilter ? '-220px' : '15px')};
    width: 220px;
    bottom: 0;
    z-index: 50;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    height: calc(100% - 90px);
  }

  @media screen and (max-width: 767px) {
    height: calc(100% - 90px);
  }
`;

export const FilterToggle = styled.button`
  position: absolute;
  top: 70px;
  right: -35px;
  cursor: pointer;
  display: none;
  width: 35px;
  height: 60px;
  padding: 0;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  background-color: ${({ theme }) => theme.color.second};
  justify-content: center;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme, isShowFilter }) =>
      isShowFilter ? theme.color.white : 'none'};
    stroke: ${({ theme, isShowFilter }) =>
      !isShowFilter ? theme.color.white : 'none'};
  }

  @media screen and (max-width: 999px) {
    display: flex;
  }
`;

export const BackDropFilter = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 40;
  position: fixed;
  display: ${({ isShowFilter }) => (isShowFilter ? 'block' : 'none')};
`;
