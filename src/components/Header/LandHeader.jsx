import { useRef, useState, useEffect } from 'react';
import {
  Header,
  HeaderInner,
  Logo,
  MenuSpan,
  Burger,
  NavBox,
} from './LandHeader.styled';
import { Navigation } from './Navigation/Navigation';
import { Contacts } from './Contacts/Contacts';
import { Icon } from 'components/Icon/Icon';
import { Social } from 'components/Social/Social';
import { Container } from 'pages/Common.styled';

export const LandHeader = ({ fnHeigth }) => {
  const [showBurger, setShowBurger] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showMenu = () => {
    setShowBurger(!showBurger);
    document.body.classList.toggle('no-scroll');
  };

  useEffect(() => {
    const refHeader = headerRef.current;
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === refHeader) {
          setHeaderHeight(entry.contentRect.height);
          fnHeigth(entry.contentRect.height);
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

  return (
    <Header scroll={scrollPosition} show={showBurger}>
      <Container>
        <HeaderInner ref={headerRef}>
          <Logo>
            <Icon name={'icon-logo'} viewBox="0 0 82 32" />
          </Logo>

          <Burger onClick={showMenu}>
            <MenuSpan show={showBurger}></MenuSpan>
          </Burger>

          <NavBox headerHeight={headerHeight} show={showBurger}>
            <Navigation />
            <Contacts />
            <Social />
          </NavBox>
        </HeaderInner>
      </Container>
    </Header>
  );
};
