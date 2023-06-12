import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  Inner,
  Text,
  Span,
  TextAdd,
  Form,
  Input,
  PhoneInput,
  Button,
} from './SendPhone.styled';
import { sendPhoneToTelegram } from 'components/API/API';
import { LoadSpiner } from 'components/LoadSpiner/LoadSpiner';
import { Icon } from 'components/Icon/Icon';
import { useNavigate } from 'react-router-dom';
import { useBasket, useShowModal } from 'globalState/globalState';

export const SendPhone = () => {
  const { toggleModal } = useShowModal();
  const { currentGood } = useBasket();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isBtnDisab, setIsBtnDisab] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const phoneRegex =
    /^(\+38)?\s?(\(0\d{2}\)|0\d{2})[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  const navigate = useNavigate();

  const sendAPI = async () => {
    try {
      setIsBtnDisab(true);
      setIsLoading(true);

      await sendPhoneToTelegram({ name, phone, currentGood });

      setIsBtnDisab(false);
      setIsLoading(false);
      setName('');
      setPhone('');

      Notify.success('Дані відправлено');

      toggleModal(false);
      navigate('/thanks');
    } catch (error) {
      setIsBtnDisab(false);
      setIsLoading(false);

      console.log(error);

      Notify.failure('Упс..Сталася помилка :(');
    }
  };

  const submitForm = e => {
    e.preventDefault();
    if (!phoneRegex.test(phone)) {
      return Notify.failure('Невірний номер телефону');
    }
    sendAPI();
    e.currentTarget.reset();
  };
  return (
    <Inner>
      <Text isBold={true}>Отримаєте безкоштовну консультацію!</Text>
      <Text>
        Заповніть дані або зателефонуйте нам по номеру{' '}
        <Span href="tel:+380680554488">0680554488</Span>
      </Text>
      <TextAdd>Найближчим часом з вами зв'яжеться менеджер.</TextAdd>
      <Form onSubmit={submitForm}>
        <Input
          type="text"
          placeholder="Ім’я"
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
          placeholder="+38(0XX)-XXX-XX-XX"
          name="phone"
          id="phone"
          onAccept={value => setPhone(value)}
          required
        />
        <Button type="submit" disabled={isBtnDisab}>
          {isLoading ? (
            <LoadSpiner borderColor={'#fff'} barColor={'#fff'} />
          ) : (
            <>
              <Icon name="icon-send" />
              Надіслати
            </>
          )}
        </Button>
      </Form>
      {currentGood && <TextAdd>Консультація стосовно: {currentGood}</TextAdd>}
    </Inner>
  );
};
