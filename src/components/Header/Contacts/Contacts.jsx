import { ContactList, ContactItem, ContactLink } from './Contacts.styled';
import { Icon } from 'components/Icon/Icon';

export const Contacts = () => {
  return (
    <ContactList>
      <ContactItem>
        <Icon name={'icon-phone'} />
        <ContactLink href="#">068 055 44 88</ContactLink>
      </ContactItem>
      <ContactItem>
        <Icon name={'icon-email'} />
        <ContactLink href="#">solarmanua@gmail.com</ContactLink>
      </ContactItem>
    </ContactList>
  );
};
