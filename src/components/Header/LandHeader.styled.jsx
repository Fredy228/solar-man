import styled from 'styled-components';

export const HeaderInner = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div``;
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
  padding: 15px;
  border-radius: 50px;
  transition: background-color 300ms linear;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 15px;
  }
  :hover {
    background-color: ${({ theme: { color } }) => color.second};
  }
`;
export const NavText = styled.p`
  font-size: 16px;
`;
export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 50px;
  cursor: pointer;
  transition: opacity 300ms linear;
  position: relative;
  overflow: hidden;
  z-index: 99;

  :first-child {
    background-color: ${({ theme: { color } }) => color.second};
  }
  :last-child {
    background-color: ${({ theme: { color } }) => color.additional};
  }
  :before {
    content: '';
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    transition: width 750ms ease;
  }
  :hover:before {
    width: 100%;
  }

  svg {
    stroke: ${({ theme: { color } }) => color.white};
    margin-right: 5px;
    z-index: 101;
  }
`;
export const ContactLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  z-index: 101;
  color: ${({ theme: { color } }) => color.white};
`;
