import styled from 'styled-components';

export const Header = styled.header`
  padding: 5px;
  position: fixed;
  top: ${p => (p.scroll > 70 ? 5 : 0)}px;
  left: ${p => (p.scroll > 70 ? 5 : 0)}px;
  z-index: 100;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: ${p => (p.scroll > 70 ? 20 : 0)}px;
  width: calc(100% - ${p => (p.scroll > 70 ? 10 : 0)}px);
  box-shadow: ${p =>
    p.scroll > 70
      ? ' rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
      : 'none'};
  transition-timing-function: ease;
  transition-duration: 350ms;
  transition-property: top, border-radius, width, left, box-shadow;
`;

export const Main = styled.main`
  margin-top: ${p => p.heightHeader + 10}px;
`;
