import { ContactList, ContactItem, ContactLink } from './Contacts.styled';
import { Icon } from 'components/Icon/Icon';
import { ButtonOrg } from '../../../CommonStyle/ButtonCommon.styled';
import { useShowModal } from '../../../globalState/globalState';

export const Contacts = ({ widthSreen, showBurger }) => {
  const { toggleModal } = useShowModal();

  return (
    <ContactList>
      {!(widthSreen < 1000 && showBurger) && (
        <>
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
        </>
      )}

      {((showBurger && widthSreen < 1000) || widthSreen >= 1000) && (
        <ContactItem showBurger={showBurger}>
          <ButtonOrg type={'button'} onClick={() => toggleModal(true)}>
            <Icon name={'icon-annotation'} /> Отримати консультацію
          </ButtonOrg>
        </ContactItem>
      )}
    </ContactList>
  );
};
