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
  return (
    <Inner>
      <Text>Заповніть дані і отримаєте безкоштовну консультацію!</Text>
      <Text>
        Або зателефонуйте нам по номеру{' '}
        <Span href="tel:+380680554488">068 055 44 88</Span>
      </Text>
      <TextAdd>Найближчим часом з вами зв'яжеться менеджер.</TextAdd>
      <Form>
        <Input type="text" placeholder="Ім’я" />
        <Input type="tel" placeholder="Номер телефону" />
        <Button type="submit">Надіслати</Button>
      </Form>
    </Inner>
  );
};
