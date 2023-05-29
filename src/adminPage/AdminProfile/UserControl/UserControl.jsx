import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  ListUsers,
  ItemUsers,
  ListUser,
  ItemUser,
  TextUser,
  SpanUser,
  BtnUser,
  Select,
  Option,
} from './UserControl.styled';
import { Icon } from 'components/Icon/Icon';
import { deleteUsers, editRoleUsers, getUsers } from 'components/API/API';

export const UserControl = ({ role }) => {
  const [users, setUsers] = useState([]);
  const [click, setClick] = useState(false);
  const [isEdit, setIsEdit] = useState({ is: '', id: '', userName: '' });
  const [roleUp, setRoleUp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const delUserFn = async idDel => {
    try {
      setIsLoading(true);
      await deleteUsers(role, idDel);
      setIsLoading(false);
      setClick(!click);
      Notify.success('Видалено');
    } catch (error) {
      setIsLoading(false);
      Notify.failure(`${error.message}`);
      Notify.failure(`Упс... Щось пішло не так :(`);
    }
  };

  const editUserFn = async e => {
    if (!roleUp) return setIsEdit(state => ({ ...state, is: false }));

    try {
      setIsLoading(true);
      await editRoleUsers(role, isEdit.userName, roleUp);
      setIsEdit({ is: false, id: '', userName: '' });
      setRoleUp('');
      setIsLoading(false);
      Notify.success(`Змінено :)`);
      setClick(!click);
    } catch (error) {
      setIsLoading(false);
      Notify.failure(`${error.message}`);
      Notify.failure(`Упс... Щось пішло не так :(`);
    }
  };

  useEffect(() => {
    try {
      async function seterUsers() {
        if (role !== 'admin') return;
        const { users } = await getUsers();
        setUsers(users);
      }
      seterUsers();
    } catch (error) {
      Notify.failure(`${error.message}`);
    }
  }, [click, role]);

  return (
    <ListUsers>
      {users.map(item => {
        return (
          <ItemUsers key={item.id}>
            <ListUser>
              <ItemUser>
                <TextUser>
                  <SpanUser>Ім'я:</SpanUser>
                  <br />
                  {item.name}
                </TextUser>
              </ItemUser>
              <ItemUser>
                <TextUser>
                  <SpanUser>Пошта:</SpanUser>
                  <br />
                  {item.email}
                </TextUser>
              </ItemUser>
              <ItemUser>
                <TextUser>
                  <SpanUser>Роль:</SpanUser>
                  <br />
                  {isEdit.is && isEdit.id === item.id ? (
                    <Select
                      name="role"
                      defaultValue={item.role}
                      onChange={e => setRoleUp(e.target.value)}
                    >
                      <Option value="moderator">moderator</Option>
                      <Option value="user">user</Option>
                    </Select>
                  ) : (
                    item.role
                  )}
                </TextUser>
              </ItemUser>
              <ItemUser>
                {isEdit.is && isEdit.id === item.id ? (
                  <BtnUser
                    type="button"
                    disabled={
                      item.role === 'admin' ||
                      (isLoading && isEdit.id === item.id)
                    }
                    onClick={editUserFn}
                  >
                    <Icon name="icon-done" />
                    Змінити
                  </BtnUser>
                ) : (
                  <BtnUser
                    type="button"
                    disabled={item.role === 'admin'}
                    onClick={() =>
                      setIsEdit(state => ({
                        ...state,
                        is: true,
                        id: item.id,
                        userName: item.name,
                      }))
                    }
                  >
                    <Icon name="icon-pencil" />
                    Редаг.
                  </BtnUser>
                )}

                <BtnUser
                  type="button"
                  data-id={item.id}
                  onClick={() => delUserFn(item.id)}
                  disabled={
                    item.role === 'admin' ||
                    (isLoading && isEdit.id === item.id)
                  }
                >
                  <Icon name="icon-delete" />
                  Видал.
                </BtnUser>
              </ItemUser>
            </ListUser>
          </ItemUsers>
        );
      })}
    </ListUsers>
  );
};
