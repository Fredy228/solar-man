import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Title, Form, Input, Label, Button } from './LoginAdmin.styled';
import { Container } from 'pages/Common.styled';
import { loginUser } from 'components/API/API';
import { useStoreAuth, useStoreUser } from 'globalState/globalState';

export const LoginAdmin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { toggleValue } = useStoreAuth();
  const { setUser } = useStoreUser();

  const submitForm = async e => {
    e.preventDefault();

    try {
      const user = await loginUser({
        name: userName,
        password: password,
      });
      localStorage.setItem('token', user.token);
      localStorage.setItem('userData', JSON.stringify(user));

      setUser({
        ...user,
      });
      toggleValue(true);
      Notify.success('Авторизовано');
    } catch (error) {
      Notify.failure(`${error.message}`);
    }
  };

  return (
    <Container>
      <Title>Адмінка</Title>
      <Form onSubmit={submitForm}>
        <Label>
          Username
          <br />
          <Input
            type="text"
            onChange={({ target }) => setUserName(target.value)}
            value={userName}
            placeholder="User"
          />
        </Label>
        <Label>
          Password
          <br />
          <Input
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            placeholder="********"
          />
        </Label>
        <Button type="submit">Увійти</Button>
      </Form>
    </Container>
  );
};
