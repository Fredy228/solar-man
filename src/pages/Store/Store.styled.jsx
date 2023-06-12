import styled from 'styled-components';

export const Inner = styled.div`
  margin-top: 90px;
  display: flex;
  position: relative;
  min-height: calc(100vh - 70px);

  @media screen and (max-width: 1000px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 768px) {
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
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 20px;

  @media screen and (min-width: 1000px) {
    margin-top: 15px;
    max-height: calc(100vh - 115px);
    width: ${({ isShow }) => (isShow ? '220px' : '0px')};
    overflow: ${({ isShow }) => (isShow ? 'initial' : 'hidden')};
    visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  }

  @media screen and (max-width: 1000px) {
    position: fixed;
    left: ${({ isShowFilter }) => (!isShowFilter ? '-220px' : '15px')};
    width: 220px;
    bottom: 0;
    z-index: 50;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    height: calc(100% - 90px);
  }

  @media screen and (max-width: 768px) {
    height: calc(100% - 80px);
  }
`;

export const FilterToggle = styled.button`
  position: absolute;
  bottom: 100px;
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

  @media screen and (max-width: 1000px) {
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
