import styled from 'styled-components';

export const HeaderInner = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1000px) {
    justify-content: space-between;
    height: 70px;
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    height: 60px;
  }
`;
export const Logo = styled.div`
  svg {
    height: 50px;
    width: auto;
  }
`;
export const Burger = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
export const MenuSpan = styled.span`
  width: 20px;
  height: 2px;
  background-color: #000;
  position: relative;
  transition-timing-function: ease;
  transition-duration: 250ms;
  transition-property: opacity, transform;
  transform: ${p => (p.show ? 'rotate(45deg)' : 'rotate(0deg)')};

  :after,
  :before {
    content: '';
    background-color: #000;
    width: 20px;
    height: 2px;
    position: absolute;
    transition-timing-function: ease;
    transition-duration: 250ms;
    transition-property: opacity, transform;
  }

  :after {
    left: 0;
    top: ${p => (p.show ? '0' : '7px')};
    transform: ${p => (p.show ? 'rotate(90deg)' : 'rotate(0deg)')};
  }

  :before {
    left: 0;
    bottom: 7px;
    opacity: ${p => (p.show ? '0' : '1')};
  }
`;

export const NavBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  height: 100%;
  transition: transform 350ms ease;

  @media screen and (max-width: 1000px) {
    position: fixed;
    width: 100%;
    height: calc(100% - ${p => p.headerHeight}px - 10px);
    bottom: 0;
    left: 0;
    background-color: ${({ theme: { color } }) => color.menuBg};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transform: translateX(${p => (p.show ? '0' : '120%')});
    opacity: ${p => (p.show ? '1' : '0')};
  }
`;
