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

export const SendPhone = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const phoneRegex =
    /^(\+38)?\s?(\(0\d{2}\)|0\d{2})[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

  const submitForm = e => {
    e.preventDefault();
    console.log(phone);
    console.log(phoneRegex.test(phone));
    if (!phoneRegex.test(phone)) {
      return Notify.failure('Невірний номер телефону');
    }
  };
  return (
    <Inner>
      <Text>Заповніть дані і отримаєте безкоштовну консультацію!</Text>
      <Text>
        Або зателефонуйте нам по номеру{' '}
        <Span href="tel:+380680554488">0680554488</Span>
      </Text>
      <TextAdd>Найближчим часом з вами зв'яжеться менеджер.</TextAdd>
      <Form onSubmit={submitForm}>
        <Input
          type="text"
          placeholder="Ім’я"
          value={name}
          pattern="[a-zA-Zа-яА-ЯёЁґҐіІїЇєЄ'’-]+(\s[a-zA-Zа-яА-ЯёЁґҐіІїЇєЄ'’-]+)*"
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
        <Button type="submit">Надіслати</Button>
      </Form>
    </Inner>
  );
};
