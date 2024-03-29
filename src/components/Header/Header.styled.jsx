import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 10px 5px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: ${({ theme, scroll, show }) =>
    show || scroll > 35 ? theme.color.white : 'transparent'};
  width: 100%;
  box-shadow: ${p =>
    p.scroll > 40 && !p.show
      ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
      : 'none'};
  transition-timing-function: ease;
  transition-duration: 350ms;
  transition-property: width, box-shadow, background-color;
`;

export const HeaderInner = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 999px) {
    justify-content: space-between;
  }
`;
export const Logo = styled.div`
  cursor: pointer;

  svg {
    height: 50px;
    width: auto;
    fill: ${({ theme }) => theme.color.second};
  }

  @media screen and (max-width: 1199px) {
    svg {
      height: 42px;
    }
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
  background-color: ${({ theme }) => theme.color.main};
  position: relative;
  transition-timing-function: ease;
  transition-duration: 250ms;
  transition-property: opacity, transform;
  transform: ${p => (p.show ? 'rotate(45deg)' : 'rotate(0deg)')};

  :after,
  :before {
    content: '';
    background-color: ${({ theme }) => theme.color.main};
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

  @media screen and (max-width: 999px) {
    position: fixed;
    width: 100%;
    height: calc(100% - ${p => p.headerHeight}px);
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(7px);

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
  @media screen and (max-width: 999px) {
    height: 70px;
  }
  @media screen and (max-width: 767px) {
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
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
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

export const AdminTabs = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 110px;
  height: auto;

  @media screen and (max-width: 999px) {
    margin-top: 100px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 90px;
  }
`;

export const AdminTab = styled.li`
  padding: 10px 0;
  :not(:last-child) {
    margin-right: 15px;
  }
  @media screen and (max-width: 500px) {
    :not(:last-child) {
      margin-right: 5px;
    }
  }
`;

export const LinkNav = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 15px;
  font-family: inherit;
  font-weight: inherit;
  border: 2px solid ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.second};
  transition: transform 350ms ease;

  &.active {
    background-color: ${({ theme }) => theme.color.second};
    color: ${({ theme }) => theme.color.white};
  }

  @media screen and (max-width: 500px) {
    padding: 10px 10px;
  }
`;
