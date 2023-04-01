import { HeaderInner, Logo, MenuSpan, Burger } from './LandHeader.styled';
import { Navigation } from './Navigation/Navigation';
import { Contacts } from './Contacts/Contacts';
import { Icon } from 'components/Icon/Icon';
import { useEffect, useState } from 'react';

export const LandHeader = () => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [showBurger, setShowBurger] = useState(false);
  const screenResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', screenResize);
    return () => {
      window.removeEventListener('resize', screenResize);
    };
  }, []);

  return (
    <HeaderInner>
      <Logo>
        <Icon name={'icon-logo'} viewBox="0 0 82 32" />
      </Logo>

      {screenWidth <= 1000 ? (
        <Burger onClick={() => setShowBurger(!showBurger)}>
          <MenuSpan show={showBurger}></MenuSpan>
        </Burger>
      ) : (
        <>
          <Navigation />

          <Contacts />
        </>
      )}
    </HeaderInner>
  );
};
