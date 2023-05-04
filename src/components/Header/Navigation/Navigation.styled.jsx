import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: ${({ theme: { color } }) => color.white};

  @media screen and (max-width: 1000px) {
    width: 100%;
    flex: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  background-color: ${({ theme: { color } }) => color.main};
  border-radius: 50px;
  padding: 5px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    width: 100%;
    max-width: 500px;
    margin: 30px;
    padding: 20px 5px;
  }

  @media screen and (max-width: 768px) {
    margin: 15px;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 1000px) {
    :not(:last-child) {
      margin-bottom: 5px;
    }
  }

  @media screen and (min-width: 1000px) {
    :not(:last-child) {
      margin-right: 5px;
    }
  }
`;

export const LinkTo = styled(NavLink)`
  font-size: 16px;
  padding: 7px 12px;
  text-decoration: none;
  display: inline-block;
  color: inherit;
  border-radius: 50px;
  transition: background-color 300ms linear;

  :hover {
    background-color: ${({ theme: { color } }) => color.second};
  }

  &.active {
    background-color: ${({ theme: { color } }) => color.second};
  }

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1000px) {
    padding: 10px;
  }

  @media screen and (min-width: 1200px) {
    padding: 15px;
  }
`;

export const LinkToDrop = styled.span`
  font-size: 16px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  color: inherit;
  border-radius: 50px;
  justify-content: center;
  transition: background-color 300ms linear;

  :hover {
    background-color: ${({ theme: { color } }) => color.second};
  }

  @media screen and (max-width: 1000px) {
    font-size: 18px;
    :hover {
      background-color: transparent;
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 10px;
  }

  @media screen and (min-width: 1200px) {
    padding: 15px;
  }

  svg {
    width: 15px;
    height: 15px;
    margin-left: 5px;
    fill: ${({ theme: { color } }) => color.white};
    transform: translateY(2px);
  }
`;

export const DropNav = styled.div`
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  height: ${({ isShow }) => (isShow ? '200px' : '0')};
  transition-property: visibility, height;
  transition-duration: 350ms;
  transition-timing-function: ease;
  overflow: hidden;

  @media screen and (min-width: 1200px) {
    top: 50px;
  }

  @media screen and (min-width: 1000px) {
    position: absolute;
    top: 45px;
    left: 0;
    padding-top: 10px;
    width: 340px;
  }

  @media screen and (max-width: 1000px) {
    height: ${({ isShow }) => (isShow ? '162px' : '0')};
  }
  @media screen and (max-width: 355px) {
    height: ${({ isShow }) => (isShow ? '180px' : '0')};
  }
`;

export const DropNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px;
  border-radius: 20px;
  background-color: ${({ theme: { color } }) => color.main};
`;

export const DropNavItem = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const DropNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ theme: { color } }) => color.white};
  padding: 7px 20px;
  border-radius: 50px;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme: { color } }) => color.white};
    margin-right: 5px;

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  :hover {
    background-color: ${({ theme: { color } }) => color.second};
  }

  &.active {
    background-color: ${({ theme: { color } }) => color.second};
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
    text-align: center;
  }
`;
