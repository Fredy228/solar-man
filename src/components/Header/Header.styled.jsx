import styled from 'styled-components';

export const Header = styled.header`
  padding: 5px;
  position: fixed;
  top: ${p => (p.scroll > 70 && !p.show ? 5 : 0)}px;
  left: ${p => (p.scroll > 70 && !p.show ? 5 : 0)}px;
  z-index: 100;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: ${p => (p.scroll > 70 && !p.show ? 20 : 0)}px;
  width: calc(100% - ${p => (p.scroll > 70 && !p.show ? 10 : 0)}px);
  box-shadow: ${p =>
    p.scroll > 70 && !p.show
      ? ' rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
      : 'none'};
  transition-timing-function: ease;
  transition-duration: 350ms;
  transition-property: top, border-radius, width, left, box-shadow;
`;

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
    /* justify-content: space-between; */
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
  @media screen and (min-width: 1001px) {
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
  z-index: 1000;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  height: 100%;
  transition: transform 350ms ease;

  :last-child {
    div {
      @media screen and (min-width: 1000px) {
        display: none;
      }
    }
  }

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
  }
`;

export const HeaderInnerAdmin = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    height: 70px;
  }
  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.second};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin: 0 15px;
  cursor: default;
`;

export const Name = styled.p`
  font-size: 16px;
  font-style: italic;
`;

export const Role = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const LogoutBtn = styled.button`
  font-family: inherit;
  font-weight: inherit;
  padding: 7px 15px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: background-color 350ms ease;

  :hover {
    background-color: ${({ theme }) => theme.color.main};
  }
`;
