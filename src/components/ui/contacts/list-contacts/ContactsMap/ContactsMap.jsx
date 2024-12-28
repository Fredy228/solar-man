import { Iframe, InnerMap, WrapperMap } from './ContactsMap.styled';
import {
  BoxIcon,
  ItemContactsS,
  TextContacts,
  TitleContacts,
  WrapperIcon,
  WrapperText,
} from '../ListContacts.styled';
import { Icon } from '../../../../reused/icon/Icon';

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
          <TextContacts>м. Одеса, вул. Грецька, 14</TextContacts>
        </WrapperText>
      </ItemContactsS>
      <WrapperMap>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1360.537015387051!2d30.74299603668764!3d46.482569180587895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c63198bde2433b%3A0x194192eb0afcc0f0!2z0YPQuy4g0JPRgNC10YfQtdGB0LrQsNGPLCAxNCwg0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!5e0!3m2!1sru!2sua!4v1699356288840!5m2!1sru!2sua"
          style={{ border: '0' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Iframe>
      </WrapperMap>
    </InnerMap>
  );
};
