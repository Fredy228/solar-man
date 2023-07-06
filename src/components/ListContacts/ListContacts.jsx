import {
  BoxIcon,
  InnerListContacts,
  ItemContactsS,
  LinkContacts,
  ListContactsS,
  TitleContacts,
  WrapperIcon,
  WrapperText,
} from './ListContacts..styled';
import { Social } from '../Social/Social';
import { Icon } from '../Icon/Icon';
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
              (099) 583-34-45
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
