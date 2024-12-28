import {
  BoxIcon,
  InnerListContacts,
  ItemContactsS,
  LinkContacts,
  ListContactsS,
  TitleContacts,
  WrapperIcon,
  WrapperText,
} from './ListContacts.styled';
import { Social } from '../../../reused/social/Social';
import { Icon } from '../../../reused/icon/Icon';
import { ContactsMap } from './ContactsMap/ContactsMap';

export const ListContacts = () => {
  return (
    <InnerListContacts>
      <ContactsMap />
      <ListContactsS>
        <ItemContactsS>
          <WrapperIcon>
            <BoxIcon>
              <Icon name={'icon-device'} />
            </BoxIcon>
          </WrapperIcon>
          <WrapperText>
            <TitleContacts>Телефон:</TitleContacts>
            <LinkContacts href="tel:+380680554488">
              (068) 055-44-88
            </LinkContacts>
          </WrapperText>
        </ItemContactsS>
        <ItemContactsS>
          <WrapperIcon>
            <BoxIcon>
              <Icon name={'icon-email'} />
            </BoxIcon>
          </WrapperIcon>
          <WrapperText>
            <TitleContacts>Email:</TitleContacts>
            <LinkContacts href="mailto:solarmanua@gmail.com">
              solarmanua@gmail.com
            </LinkContacts>
          </WrapperText>
        </ItemContactsS>
        <ItemContactsS>
          <WrapperIcon>
            <BoxIcon>
              <Icon name={'icon-like'} />
            </BoxIcon>
          </WrapperIcon>
          <WrapperText>
            <TitleContacts>Соц. мережі</TitleContacts>
            <Social color={'#9CA3AF'} />
          </WrapperText>
        </ItemContactsS>
      </ListContactsS>
    </InnerListContacts>
  );
};
