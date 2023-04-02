import { ContactList, ContactItem, ContactLink } from './Contacts.styled';
import { Icon } from 'components/Icon/Icon';

export const Contacts = () => {
  return (
    <ContactList>
      <ContactItem>
        <Icon name={'icon-phone'} />
        <ContactLink href="tel:+380680554488">068 055 44 88</ContactLink>
      </ContactItem>
      <ContactItem>
        <Icon name={'icon-email'} />
        <ContactLink href="mailto:solarmanua@gmail.com">
          solarmanua@gmail.com
        </ContactLink>
      </ContactItem>
    </ContactList>
  );
};
