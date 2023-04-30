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

export const CreateUser = ({ setIsCreate }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const createUserFn = async e => {
    e.preventDefault();
    if (!name.trim() || !password.trim() || !role.trim())
      return Notify.warning('Заповніть всі поля');
    try {
      await createUser(name, password, role);
      setIsCreate(false);
      window.location.reload();
      Notify.success(`Користувача створено`);
    } catch (error) {
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
        <Button type="submit">Сворити</Button>
      </Form>
    </BoxForm>
  );
};
