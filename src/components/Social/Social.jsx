import { SocialBox, SociaLink } from './Social.styled';
import { Icon } from 'components/Icon/Icon';

export const Social = () => {
  return (
    <SocialBox>
      <SociaLink href="#">
        <Icon name={'icon-telegram'} />
      </SociaLink>
      <SociaLink href="#">
        <Icon name={'icon-instagram'} />
      </SociaLink>
      <SociaLink href="#">
        <Icon name={'icon-facebook'} />
      </SociaLink>
      <SociaLink href="#">
        <Icon name={'icon-youtube'} />
      </SociaLink>
    </SocialBox>
  );
};
