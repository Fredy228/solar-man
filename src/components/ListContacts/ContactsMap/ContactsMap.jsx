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
          <TextContacts>м.Одеса</TextContacts>
        </WrapperText>
      </ItemContactsS>
      <WrapperMap>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175899.960742958!2d30.546983781996047!3d46.45985364467173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6318a0b864c43%3A0x129f8fe28cf2176c!2z0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!5e0!3m2!1sru!2sua!4v1688662970723!5m2!1sru!2sua"
          style={{ border: '0' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Iframe>
      </WrapperMap>
    </InnerMap>
  );
};
