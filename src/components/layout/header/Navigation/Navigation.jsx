import { Icon } from 'components/reused/icon/Icon';
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
import { useLocation } from 'react-router-dom';

export const Navigation = ({ showMenu }) => {
  const [isShowDropNav, setIsShowDropNav] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname.split('/');
  const lang = currentPath[currentPath.length - 1];

  const isRus = lang === 'ru';

  const toggleMenu = () => {
    window.scrollTo(0, 0);
    showMenu();
    setIsShowDropNav(false);
  };

  return (
    <Nav>
      <NavList>
        <NavItem
          onMouseOver={() => setIsShowDropNav(true)}
          onMouseOut={() => setIsShowDropNav(false)}
        >
          <LinkToDrop>
            {isRus ? 'Услуги' : 'Послуги'}
            <Icon name="icon-downarrow" />
          </LinkToDrop>
          <DropNav isShow={isShowDropNav}>
            <DropNavList>
              <DropNavItem>
                <DropNavLink to="/enterprises" onClick={toggleMenu}>
                  <Icon name="icon-company" />
                  {isRus ? 'Для предприятий' : 'Для підприємств'}
                </DropNavLink>
              </DropNavItem>
              <DropNavItem>
                <DropNavLink to="/home" onClick={toggleMenu}>
                  <Icon name="icon-home" />
                  {isRus ? 'Для дома' : 'Для дому'}
                </DropNavLink>
              </DropNavItem>
              <DropNavItem>
                <DropNavLink to="/investment" onClick={toggleMenu}>
                  <Icon name="icon-store" />
                  {isRus ? 'Для инвестиций' : 'Для інвестицій'}
                </DropNavLink>
              </DropNavItem>
              <DropNavItem>
                <DropNavLink to="/backup-power" onClick={toggleMenu}>
                  <Icon name="icon-battery" />

                  {isRus
                    ? 'Резервное электропитание'
                    : 'Резервне електроживлення'}
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
            {isRus ? 'Проекты' : 'Проекти'}
          </LinkTo>
        </NavItem>
        <NavItem>
          <LinkTo to="/about-us" onClick={toggleMenu}>
            {isRus ? 'О нас' : 'Про нас'}
          </LinkTo>
        </NavItem>
        <NavItem>
          <LinkTo to="/contacts" onClick={toggleMenu}>
            {isRus ? 'Контакты' : 'Контакти'}
          </LinkTo>
        </NavItem>
      </NavList>
    </Nav>
  );
};
