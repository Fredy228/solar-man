import { useState, useEffect, forwardRef } from 'react';
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
import { Icon } from 'components/reused/icon/Icon';
import { Social } from 'components/reused/social/Social';
import { Container } from 'pages/Common.styled';
import useScrollScreen from '../../../services/scrollScreen';
import useWindowWidth from 'services/widthScreen';

export const Head = forwardRef(({ headerHeight }, ref) => {
  const [showBurger, setShowBurger] = useState(false);
  const scrollScreen = useScrollScreen();
  const widthSreen = useWindowWidth();

  const showMenu = () => {
    if (widthSreen > 1000) return;

    setShowBurger(!showBurger);

    if (!showBurger) document.body.classList.add('no-scroll');
    if (showBurger) document.body.classList.remove('no-scroll');
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
          <Burger onClick={showMenu}>
            <MenuSpan show={showBurger}></MenuSpan>
          </Burger>

          <Logo
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              if (showBurger) showMenu();
            }}
          >
            <Icon name={'icon-logo'} viewBox="0 0 82 32" />
          </Logo>

          {widthSreen <= 1000 && <Contacts widthSreen={widthSreen} />}

          <NavBox headerHeight={headerHeight} show={showBurger}>
            <Navigation showMenu={showMenu} />
            <Contacts widthSreen={widthSreen} showBurger={showBurger} />
            {widthSreen < 1000 && <Social />}
          </NavBox>
        </HeaderInner>
      </Container>
    </Header>
  );
});
