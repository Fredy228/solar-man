import { Icon } from 'components/Icon/Icon';
import {
  Nav,
  NavList,
  NavItem,
  LinkTo,
  DropNav,
  DropNavList,
  DropNavItem,
  DropNavLink,
  LinkToDrop,
} from './Navigation.styled';
import { useState } from 'react';

export const Navigation = ({ showMenu }) => {
  const [isShowDropNav, setIsShowDropNav] = useState(false);

  const toggleMenu = () => {
    window.scrollTo(0, 0);
    showMenu();
    setIsShowDropNav(false);
  };

  return (
    <Nav>
      <NavList>
        <NavItem>
          <LinkTo to="/" onClick={toggleMenu}>
            Головна
          </LinkTo>
        </NavItem>
        <NavItem
          onMouseOver={() => setIsShowDropNav(true)}
          onMouseOut={() => setIsShowDropNav(false)}
        >
          <LinkToDrop>
            Наші послуги <Icon name="icon-downarrow" />
          </LinkToDrop>
          <DropNav isShow={isShowDropNav}>
            <DropNavList>
              <DropNavItem>
                <DropNavLink to="/enterprises" onClick={toggleMenu}>
                  <Icon name="icon-company" />
                  Для підприємств
                </DropNavLink>
              </DropNavItem>
              <DropNavItem>
                <DropNavLink to="/home" onClick={toggleMenu}>
                  <Icon name="icon-home" />
                  Для дому
                </DropNavLink>
              </DropNavItem>
              <DropNavItem>
                <DropNavLink to="/investment" onClick={toggleMenu}>
                  <Icon name="icon-profit" /> Для інвестицій
                </DropNavLink>
              </DropNavItem>
              <DropNavItem>
                <DropNavLink to="/backup-power" onClick={toggleMenu}>
                  <Icon name="icon-battery" />
                  Резервне електроживлення
                </DropNavLink>
              </DropNavItem>
            </DropNavList>
          </DropNav>
        </NavItem>
        <NavItem>
          <LinkTo to="/store" onClick={toggleMenu}>
            Магазин
          </LinkTo>
        </NavItem>
        <NavItem>
          <LinkTo to="/projects" onClick={toggleMenu}>
            Наші проекти
          </LinkTo>
        </NavItem>
        <NavItem>
          <LinkTo to="/about-us" onClick={toggleMenu}>
            Про нас
          </LinkTo>
        </NavItem>
      </NavList>
    </Nav>
  );
};
