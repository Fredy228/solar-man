import { Icon } from 'components/Icon/Icon';
import {
  HeaderInner,
  Logo,
  Nav,
  NavList,
  NavItem,
  NavText,
  ContactList,
  ContactItem,
  ContactLink,
} from './LandHeader.styled';

export const LandHeader = () => {
  return (
    <HeaderInner>
      <Logo>
        <Icon
          name={'icon-logo'}
          width="auto"
          height="50"
          viewBox="0 0 82 32"
          fill="#000"
        />
      </Logo>

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

      <ContactList>
        <ContactItem>
          <Icon name={'icon-phone'} width="20" height="20" fill="#fff" />
          <ContactLink href="#">099 583 34 45</ContactLink>
        </ContactItem>
        <ContactItem>
          <Icon name={'icon-email'} width="20" height="20" fill="#fff" />
          <ContactLink href="#">solar.man@gmail.com</ContactLink>
        </ContactItem>
      </ContactList>
    </HeaderInner>
  );
};
