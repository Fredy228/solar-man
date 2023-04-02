import { useRef, useState, useEffect } from 'react';
import {
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

export const LandHeader = () => {
  const [showBurger, setShowBurger] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

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
  }, []);

  return (
    <HeaderInner ref={headerRef}>
      <Logo>
        <Icon name={'icon-logo'} viewBox="0 0 82 32" />
      </Logo>

      <Burger onClick={() => setShowBurger(!showBurger)}>
        <MenuSpan show={showBurger}></MenuSpan>
      </Burger>

      <NavBox headerHeight={headerHeight} show={showBurger}>
        <Navigation />
        <Contacts />
        <Social />
      </NavBox>
    </HeaderInner>
  );
};
