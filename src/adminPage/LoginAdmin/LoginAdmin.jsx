import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Title,
  Form,
  Input,
  Label,
  Button,
  LabelPass,
  InputPass,
  BtnShowPass,
} from './LoginAdmin.styled';
import { Container } from 'pages/Common.styled';
import { loginUser } from 'components/API/API';
import { useStoreAuth, useStoreUser } from 'globalState/globalState';
import { LoadSpiner } from '../../components/LoadSpiner/LoadSpiner';

const LoginAdmin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { toggleValue } = useStoreAuth();
  const { setUser } = useStoreUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);

  const submitForm = async e => {
    e.preventDefault();

    try {
      setIsLoading(true);
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
      setIsLoading(false);
      Notify.success('Авторизовано');
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 401)
        return Notify.failure('Не вірний пароль або логін');
      Notify.failure(`Щось пішло не так, помилка: ${error.response.status}`);
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
        <LabelPass>
          Password
          <br />
          <InputPass
            type={isShowPass ? 'text' : 'password'}
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            placeholder="********"
          />
          <BtnShowPass
            type={'button'}
            onClick={() => setIsShowPass(state => !state)}
          >
            {isShowPass ? 'Сховати' : 'Показати'}
          </BtnShowPass>
        </LabelPass>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <LoadSpiner barColor={'#fff'} borderColor={'#fff'} />
          ) : (
            'Увійти'
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginAdmin;
