// import { useState } from 'react';
import {
  Inner,
  Text,
  Span,
  TextAdd,
  Form,
  Input,
  Button,
} from './SendPhone.styled';

export const SendPhone = () => {
  //   const [name, setName] = useState('');
  //   const [phone, setPhone] = useState('');

  //   const handleChangePhone = e => {
  //     const value = Number(e.target.value);
  //     if (!value) return;
  //     console.log(value);
  //     setPhone(value);
  //   };

  const submitForm = e => {
    e.preventDefault();
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
          //   value={name}
          name="name"
          //   onChange={e => {
          //     setName(e.target.value);
          //   }}
        />
        <Input
          type="tel"
          //   pattern="\+380[0-9]{9}"
          placeholder="Номер телефону"
          //   value={phone}
          name="phone"
          //   onChange={handleChangePhone}
        />
        <Button type="submit">Надіслати</Button>
      </Form>
    </Inner>
  );
};
