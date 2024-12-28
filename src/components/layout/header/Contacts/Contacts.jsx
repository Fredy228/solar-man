import {
  ContactList,
  ContactItem,
  ContactLink,
  BoxLang,
  BtnLang,
  SpanLang,
} from './Contacts.styled';
import { Icon } from 'components/reused/icon/Icon';
import { ButtonOrg } from '../../../../common-style/ButtonCommon.styled';
import { useShowModal } from '../../../../globalState/globalState';
import { useLocation, useNavigate } from 'react-router-dom';

export const Contacts = ({ widthSreen, showBurger }) => {
  const { toggleModal } = useShowModal();

  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname.split('/');
  const lang = currentPath[currentPath.length - 1];
  const isRus = lang === 'ru';

  const handleLang = langTo => {
    if (lang === langTo) return;
    const path = [
      ...currentPath.splice(0, currentPath.length - 1),
      langTo === 'ru' ? 'ru' : 'uk',
    ].join('/');
    navigate(path);
  };

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
        <>
          {['uk', 'ru'].includes(lang) && (
            <BoxLang>
              <BtnLang
                type={'button'}
                active={lang === 'uk'}
                onClick={() => handleLang('uk')}
              >
                UK
              </BtnLang>
              <SpanLang></SpanLang>
              <BtnLang
                type={'button'}
                active={lang === 'ru'}
                onClick={() => handleLang('ru')}
              >
                RU
              </BtnLang>
            </BoxLang>
          )}

          <ContactItem showBurger={showBurger}>
            <ButtonOrg type={'button'} onClick={() => toggleModal(true)}>
              <Icon name={'icon-annotation'} />{' '}
              {(widthSreen < 1000 || widthSreen >= 1200) && (
                <>
                  {' '}
                  {isRus ? 'Получить консультацию' : 'Отримати консультацію'}
                </>
              )}
            </ButtonOrg>
          </ContactItem>
        </>
      )}
    </ContactList>
  );
};
