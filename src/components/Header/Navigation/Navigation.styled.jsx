import styled from 'styled-components';

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
  border-radius: 50px;
  transition: background-color 300ms linear;
  cursor: pointer;
  background-color: ${p => (p.active ? p.theme.color.second : 'none')};

  :hover {
    background-color: ${({ theme: { color } }) => color.second};
  }

  @media screen and (max-width: 1000px) {
    :not(:last-child) {
      margin-bottom: 5px;
    }
  }

  @media screen and (min-width: 1000px) {
    :not(:last-child) {
      margin-right: 15px;
    }
  }
`;

export const NavText = styled.a`
  font-size: 16px;
  padding: 7px 12px;
  text-decoration: none;
  display: inline-block;
  color: inherit;

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
