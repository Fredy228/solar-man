import styled from 'styled-components';

export const Nav = styled.nav`
  color: ${({ theme: { color } }) => color.white};
`;

export const NavList = styled.ul`
  display: flex;
  background-color: ${({ theme: { color } }) => color.main};
  border-radius: 50px;
  padding: 5px 5px;
`;

export const NavItem = styled.li`
  border-radius: 50px;
  transition: background-color 300ms linear;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 15px;
  }

  :hover {
    background-color: ${({ theme: { color } }) => color.second};
  }

  @media screen and (min-width: 1000px) {
    padding: 10px;
  }

  @media screen and (min-width: 1200px) {
    padding: 15px;
  }
`;

export const NavText = styled.p`
  font-size: 16px;
`;
