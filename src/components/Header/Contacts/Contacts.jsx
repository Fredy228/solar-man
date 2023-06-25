import { ContactList, ContactItem, ContactLink } from './Contacts.styled';
import { Icon } from 'components/Icon/Icon';
import { ButtonOrg } from '../../../CommonStyle/ButtonCommon.styled';
import { useShowModal } from '../../../globalState/globalState';

export const Contacts = ({ widthSreen }) => {
  const { toggleModal, isShowModal } = useShowModal();

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
      {(isShowModal || widthSreen > 1000) && (
        <ContactItem>
          <ButtonOrg type={'button'} onClick={() => toggleModal(true)}>
            <Icon name={'icon-annotation'} /> Отримати консультацію
          </ButtonOrg>
        </ContactItem>
      )}
    </ContactList>
  );
};
