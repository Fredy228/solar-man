import { SocialBox, SociaLink } from './Social.styled';
import { Icon } from 'components/Icon/Icon';

export const Social = ({ color }) => {
  return (
    <SocialBox>
      <SociaLink href="#" color={color}>
        <Icon name={'icon-telegram'} />
      </SociaLink>
      <SociaLink href="#" color={color}>
        <Icon name={'icon-instagram'} />
      </SociaLink>
      <SociaLink href="#" color={color}>
        <Icon name={'icon-facebook'} />
      </SociaLink>
      <SociaLink href="#" color={color}>
        <Icon name={'icon-youtube'} />
      </SociaLink>
    </SocialBox>
  );
};
