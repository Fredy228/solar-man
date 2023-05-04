import { useRef, useState, useEffect } from 'react';
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

export const Head = ({ fnHeigth }) => {
  const [showBurger, setShowBurger] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const scrollScreen = useScrollScreen();
  const widthSreen = useWindowWidth();

  const showMenu = () => {
    if (widthSreen > 1000) return;

    setShowBurger(!showBurger);
    document.body.classList.toggle('no-scroll');
  };

  useEffect(() => {
    const refHeader = headerRef.current;
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === refHeader) {
          setHeaderHeight(entry.contentRect.height);
        }
      }
    });

    if (refHeader) {
      resizeObserver.observe(refHeader);
    }

    return () => {
      if (refHeader) {
        resizeObserver.unobserve(refHeader);
      }
    };
  }, [fnHeigth]);

  useEffect(() => {
    if (widthSreen <= 1000) {
      setShowBurger(false);
      document.body.classList.remove('no-scroll');
    }
  }, [widthSreen]);

  return (
    <Header scroll={scrollScreen} show={showBurger}>
      <Container>
        <HeaderInner ref={headerRef}>
          <Logo>
            <Icon name={'icon-logo'} viewBox="0 0 82 32" />
          </Logo>

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
};
