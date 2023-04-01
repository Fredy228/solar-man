import { ContactList, ContactItem, ContactLink } from './Contacts.styled';
import { Icon } from 'components/Icon/Icon';

export const Contacts = () => {
  return (
    <ContactList>
      <ContactItem>
        <Icon name={'icon-phone'} />
        <ContactLink href="#">099 583 34 45</ContactLink>
      </ContactItem>
      <ContactItem>
        <Icon name={'icon-email'} />
        <ContactLink href="#">solar.man@gmail.com</ContactLink>
      </ContactItem>
    </ContactList>
  );
};
