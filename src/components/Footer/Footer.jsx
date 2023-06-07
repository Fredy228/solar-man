import { Container } from 'pages/Common.styled';
import {
  FooterBox,
  FooterInner,
  FooterContacts,
  FooterLink,
  FooterLogo,
  Copyright,
} from './Footer.styled';
import { Icon } from 'components/Icon/Icon';
import { Social } from 'components/Social/Social';

export const Footer = () => {
  const getCurrentYear = () => {
    const now = new Date();
    return now.getFullYear();
  };

  return (
    <FooterBox>
      <Container>
        <FooterInner>
          <FooterLogo>
            <Icon name="icon-logo-footer" viewBox="0 0 61 24" />
          </FooterLogo>

          <FooterContacts>
            <FooterLink href="tel:+380680554488">068 055 44 88</FooterLink>
            <FooterLink href="mailto:solarmanua@gmail.com">
              solarmanua@gmail.com
            </FooterLink>
            <Social color={'#fff'} />
          </FooterContacts>
          <Copyright>© SOLAR MAN. {getCurrentYear()}</Copyright>
        </FooterInner>
      </Container>
    </FooterBox>
  );
};
