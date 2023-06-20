import { useState, useEffect, forwardRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Header,
  HeaderInner,
  Logo,
  MenuSpan,
  Burger,
  NavBox,
} from './Header.styled';
import { Navigation } from './Navigation/Navigation';
import { Contacts } from './Contacts/Contacts';
import { Icon } from 'components/Icon/Icon';
import { Social } from 'components/Social/Social';
import { Container } from 'pages/Common.styled';
import useScrollScreen from '../../services/scrollScreen';
import useWindowWidth from 'services/widthScreen';

export const Head = forwardRef(({ headerHeight }, ref) => {
  const [showBurger, setShowBurger] = useState(false);
  const scrollScreen = useScrollScreen();
  const widthSreen = useWindowWidth();
  const history = useNavigate();

  const showMenu = () => {
    if (widthSreen > 1000) return;

    setShowBurger(!showBurger);
    document.body.classList.toggle('no-scroll');
  };

  useEffect(() => {
    if (widthSreen <= 1000) {
      setShowBurger(false);
      document.body.classList.remove('no-scroll');
    }
  }, [widthSreen]);

  return (
    <Header scroll={scrollScreen} show={showBurger} ref={ref}>
      <Container>
        <HeaderInner>
          <NavLink to="/">
            <Logo
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Icon name={'icon-logo'} viewBox="0 0 82 32" />
            </Logo>
          </NavLink>

          <Burger onClick={showMenu}>
            <MenuSpan show={showBurger}></MenuSpan>
          </Burger>

          <NavBox headerHeight={headerHeight} show={showBurger}>
            <Navigation showMenu={showMenu} />
            <Contacts />
            {widthSreen < 1000 && <Social />}
          </NavBox>
        </HeaderInner>
      </Container>
    </Header>
  );
});
