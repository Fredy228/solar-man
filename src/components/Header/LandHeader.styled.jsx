import styled from 'styled-components';

export const HeaderInner = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    /* top: 7px; */
    /* opacity: 1; */
    top: ${p => (p.show ? '0' : '7px')};
    transform: ${p => (p.show ? 'rotate(90deg)' : 'rotate(0deg)')};
  }

  :before {
    left: 0;
    bottom: 7px;
    opacity: ${p => (p.show ? '0' : '1')};
  }
`;
