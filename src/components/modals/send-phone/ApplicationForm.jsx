import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';

import { Icon } from 'components/reused/icon/Icon';
import { LoadSpiner } from 'components/reused/load-spinner/LoadSpiner';
import { useShowModal } from 'globalState/globalState';
import { useNavigate } from 'react-router-dom';
import { sendPhoneToTelegram } from '../../../api/quiz.api';
import { ButtonOrg } from '../../../common-style/ButtonCommon.styled';
import { Form, Input, PhoneInput } from './SendPhone.styled';
import { useUtmTags } from 'hooks/use-utm-tags';

export const ApplicationForm = ({
  currentGood,
  alignItems,
  marginValue,
  maxWidth,
  widthValue,
  isRus,
}) => {
  const { toggleModal } = useShowModal();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  const [isBtnDisab, setIsBtnDisab] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const phoneRegex =
    /^(\+38)?\s?(\(0\d{2}\)|0\d{2})[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  const navigate = useNavigate();
  const utems = useUtmTags();

  const sendAPI = async () => {
    try {
      setIsBtnDisab(true);
      setIsLoading(true);

      await sendPhoneToTelegram({ name, phone, currentGood }, utems);

      setIsBtnDisab(false);
      setIsLoading(false);
      setName('');
      setPhone('');
      // setEmail('');

      Notify.success('Відправлено успішно');

      toggleModal(false);
      navigate('/thanks');
    } catch (error) {
      setIsBtnDisab(false);
      setIsLoading(false);

      Notify.failure('Упс..Сталася помилка :(');
      if (error.response.data.message)
        Notify.failure(error.response.data.message);
    }
  };

  const submitForm = e => {
    e.preventDefault();
    if (!phoneRegex.test(phone)) {
      return Notify.failure('Невірний номер телефону');
    }

    sendAPI().catch(console.error);
  };

  return (
    <Form
      onSubmit={submitForm}
      alignItems={alignItems}
      marginValue={marginValue}
      maxWidth={maxWidth}
      widthValue={widthValue}
    >
      <Input
        type="text"
        placeholder={isRus ? 'Ваше имя' : 'Ваше ім’я'}
        value={name}
        pattern="[a-zA-Zа-яА-ЯёЁґҐіІїЇєЄ'’\-]+( [a-zA-Zа-яА-ЯёЁґҐіІїЇєЄ'’\-]+)*"
        name="name"
        onChange={e => {
          setName(e.target.value);
        }}
        required
      />

      <PhoneInput
        type="text"
        mask="+{38}(000)-000-00-00"
        definitions={{
          '#': /[0-9]/,
        }}
        placeholder={isRus ? 'Ваш номер телефона' : 'Ваш номер телефону'}
        name="phone"
        id="phone"
        onAccept={value => setPhone(value)}
        required
      />
      {/*<Input*/}
      {/*  type="email"*/}
      {/*  placeholder="Ваш email"*/}
      {/*  value={email}*/}
      {/*  name="email"*/}
      {/*  onChange={e => {*/}
      {/*    setEmail(e.target.value);*/}
      {/*  }}*/}
      {/*  required*/}
      {/*/>*/}
      <ButtonOrg
        type={'submit'}
        disabled={isBtnDisab}
        colorBgHover={'secondBlur'}
      >
        {isLoading ? (
          <LoadSpiner borderColor={'#fff'} barColor={'#fff'} />
        ) : (
          <>
            <Icon name="icon-annotation" />
            {isRus ? 'Отправить запрос' : 'Надіслати запит'}
          </>
        )}
      </ButtonOrg>
    </Form>
  );
};
