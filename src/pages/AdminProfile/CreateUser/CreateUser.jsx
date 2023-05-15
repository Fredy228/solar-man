import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  BoxForm,
  Form,
  Label,
  Input,
  Button,
  Select,
  Option,
} from './CreateUser.styled';
import { createUser } from 'components/API/API';
import { LoadSpiner } from '../../../components/LoadSpiner/LoadSpiner';

export const CreateUser = ({ setIsCreate }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [isLoading, setIsLoading] = useState(false);

  const createUserFn = async e => {
    e.preventDefault();
    if (!name.trim() || !password.trim() || !role.trim())
      return Notify.warning('Заповніть всі поля');
    try {
      setIsLoading(true);
      await createUser(name, password, role);
      setIsCreate(false);
      window.location.reload();
      setIsLoading(false);
      Notify.success(`Користувача створено`);
    } catch (error) {
      setIsLoading(false);
      setIsCreate(false);
      Notify.failure('Щось пішло не так або такий користувач вже є');
    }
  };

  return (
    <BoxForm>
      <Form onSubmit={createUserFn}>
        <Label>
          Ім'я:
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Label>
        <Label>
          Роль:
          <Select onChange={e => setRole(e.target.value)} value={role}>
            <Option value="user">user</Option>
            <Option value="moderator">moderator</Option>
          </Select>
        </Label>
        <Label>
          Пароль:
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <LoadSpiner barColor={'#fff'} borderColor={'#fff'} />
          ) : (
            'Створити'
          )}
        </Button>
      </Form>
    </BoxForm>
  );
};
