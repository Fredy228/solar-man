import { SocialBox, SociaLink } from './Social.styled';
import { Icon } from 'components/reused/icon/Icon';

export const Social = ({ color }) => {
  return (
    <SocialBox>
      <SociaLink
        href="https://www.facebook.com/solarman.pr0"
        target="_blank"
        color={color}
      >
        <Icon name={'icon-facebook'} />
      </SociaLink>
      <SociaLink
        href="https://www.instagram.com/solarman.pro/"
        target="_blank"
        color={color}
      >
        <Icon name={'icon-instagram'} />
      </SociaLink>

      <SociaLink href="https://t.me/solarmanpro" target="_blank" color={color}>
        <Icon name={'icon-telegram'} />
      </SociaLink>
      {/*<SociaLink*/}
      {/*  href="https://www.youtube.com/@solarman9933"*/}
      {/*  target="_blank"*/}
      {/*  color={color}*/}
      {/*>*/}
      {/*  <icon name={'icon-youtube'} />*/}
      {/*</SociaLink>*/}
    </SocialBox>
  );
};
