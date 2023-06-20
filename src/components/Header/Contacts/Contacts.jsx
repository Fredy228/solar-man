import { ContactList, ContactItem, ContactLink } from './Contacts.styled';
import { Icon } from 'components/Icon/Icon';
import { ButtonOrg } from '../../../CommonStyle/ButtonCommon.styled';

export const Contacts = () => {
  return (
    <ContactList>
      <ContactItem>
        <ContactLink href="tel:+380680554488">
          <Icon name={'icon-device'} />
        </ContactLink>
      </ContactItem>
      <ContactItem>
        <ContactLink href="mailto:solarmanua@gmail.com">
          <Icon name={'icon-email'} />
        </ContactLink>
      </ContactItem>
      <ContactItem>
        <ButtonOrg type={'button'}>
          <Icon name={'icon-phone'} /> Отримати консультацію
        </ButtonOrg>
      </ContactItem>
    </ContactList>
  );
};
