import { Nav, NavList, NavItem, NavText } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavText>Головна</NavText>
        </NavItem>
        <NavItem>
          <NavText>Про нас</NavText>
        </NavItem>
        <NavItem>
          <NavText>Готові рішення</NavText>
        </NavItem>
        <NavItem>
          <NavText>Наші проекти</NavText>
        </NavItem>
      </NavList>
    </Nav>
  );
};
