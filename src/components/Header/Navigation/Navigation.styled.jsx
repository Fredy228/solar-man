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
      margin-right: 20px;
    }
  }
`;

export const LinkTo = styled(NavLink)`
  font-size: 16px;
  padding: 15px 0;
  text-decoration: none;
  display: inline-block;
  color: ${({ theme }) => theme.color.g500};
  border-bottom: 2px solid transparent;
  transition-property: color, border-bottom-color;
  transition-timing-function: ease;
  transition-duration: 350ms;

  :hover {
    color: ${({ theme }) => theme.color.main};
    border-bottom-color: ${({ theme }) => theme.color.second};
  }

  &.active {
    color: ${({ theme }) => theme.color.main};
    font-weight: bold;
    border-bottom-color: ${({ theme }) => theme.color.second};
  }

  //@media screen and (max-width: 1000px) {
  //  font-size: 18px;
  //}

  //@media screen and (min-width: 1000px) {
  //  padding: 10px;
  //}

  //@media screen and (min-width: 1200px) {
  //  padding: 15px;
  //}
`;

export const LinkToDrop = styled.span`
  font-size: 16px;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.g500};
  border-bottom: 2px solid transparent;
  transition-property: color, border-bottom-color;
  transition-timing-function: ease;
  transition-duration: 350ms;

  :hover {
    color: ${({ theme }) => theme.color.main};
    border-bottom-color: ${({ theme }) => theme.color.second};

    svg {
      fill: ${({ theme: { color } }) => color.main};
    }
  }

  @media screen and (max-width: 1000px) {
    font-size: 18px;
    :hover {
      background-color: transparent;
    }
  }

  //@media screen and (min-width: 1000px) {
  //  padding: 10px;
  //}
  //
  //@media screen and (min-width: 1200px) {
  //  padding: 15px;
  //}

  svg {
    width: 15px;
    height: 15px;
    margin-left: 5px;
    transition: fill 350ms ease;
    fill: ${({ theme: { color } }) => color.g500};
    transform: translateY(2px);
  }
`;

export const DropNav = styled.div`
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  height: ${({ isShow }) => (isShow ? '225px' : '0')};
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
    width: 310px;
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
  padding: 15px;
  border-radius: 20px;
  background-color: ${({ theme: { color } }) => color.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 5px 0, rgba(0, 0, 0, 0.1) 0 0 1px 0;
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
  color: ${({ theme: { color } }) => color.g500};
  padding: 7px 0;
  border-bottom: 2px solid transparent;
  transition-property: color, border-bottom-color;
  transition-timing-function: ease;
  transition-duration: 350ms;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme: { color } }) => color.g500};
    stroke: ${({ theme: { color } }) => color.g500};
    transition-property: fill, stroke;
    transition-duration: 350ms;
    transition-timing-function: ease;
    margin-right: 5px;

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  :hover {
    color: ${({ theme }) => theme.color.main};
    border-bottom-color: ${({ theme }) => theme.color.second};

    svg {
      fill: ${({ theme: { color } }) => color.main};
      stroke: ${({ theme: { color } }) => color.main};
    }
  }

  &.active {
    color: ${({ theme }) => theme.color.main};
    font-weight: bold;
    border-bottom-color: ${({ theme }) => theme.color.second};

    svg {
      fill: ${({ theme: { color } }) => color.main};
      stroke: ${({ theme: { color } }) => color.main};
    }
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
    text-align: center;
  }
`;
