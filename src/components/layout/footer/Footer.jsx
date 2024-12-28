import { Container } from 'pages/Common.styled';
import {
  FooterInner,
  FooterContacts,
  FooterLink,
  FooterLogo,
  Copyright,
} from './Footer.styled';
import { Icon } from 'components/reused/icon/Icon';
import { Social } from 'components/reused/social/Social';
import useWindowWidth from '../../../services/widthScreen';

export const Footer = () => {
  const widthScreen = useWindowWidth();

  const getCurrentYear = () => {
    const now = new Date();
    return now.getFullYear();
  };

  return (
    <Container>
      <FooterInner>
        <FooterLogo>
          <Icon
            name={widthScreen < 768 ? 'icon-logo-v2' : 'icon-logo-footer'}
            viewBox={widthScreen < 768 ? undefined : '0 0 61 24'}
          />
        </FooterLogo>

        <Copyright>{getCurrentYear()} © Solar Man</Copyright>

        <FooterContacts>
          <FooterLink href="tel:+380680554488">
            <Icon name={'icon-device'} />
            {widthScreen >= 768 && '(068) 055-44-88'}
          </FooterLink>
          <Social color={'#9CA3AF'} />
        </FooterContacts>
      </FooterInner>
    </Container>
  );
};
