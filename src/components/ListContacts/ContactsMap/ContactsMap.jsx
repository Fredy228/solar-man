import { Iframe, InnerMap, WrapperMap } from './ContactsMap.styled';
import {
  BoxIcon,
  ItemContactsS,
  TextContacts,
  TitleContacts,
  WrapperIcon,
  WrapperText,
} from '../ListContacts..styled';
import { Icon } from '../../Icon/Icon';

export const ContactsMap = () => {
  return (
    <InnerMap>
      <ItemContactsS>
        <WrapperIcon>
          <BoxIcon>
            <Icon name={'icon-map'} />
          </BoxIcon>
        </WrapperIcon>
        <WrapperText>
          <TitleContacts>Адреса</TitleContacts>
          <TextContacts>м. Одеса, вул. В’ячеслава Чорновола, 4</TextContacts>
        </WrapperText>
      </ItemContactsS>
      <WrapperMap>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.84109730786!2d30.74392859268393!3d46.47165539661351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631775f288635%3A0x51160dac10619c8d!2z0LLRg9C70LjRhtGPINCSJ9GP0YfQtdGB0LvQsNCy0LAg0KfQvtGA0L3QvtCy0L7Qu9CwLCA0LCDQntC00LXRgdCwLCBGbGFuZGVycywgNjUwMDA!5e0!3m2!1sru!2sua!4v1689006667408!5m2!1sru!2sua"
          style={{ border: '0' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Iframe>
      </WrapperMap>
    </InnerMap>
  );
};
