import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Title,
  Section,
  ListInfo,
  ItemInfo,
  EditBtn,
  ItemText,
  ListUsers,
  ItemUsers,
  ListUser,
  ItemUser,
  TextUser,
  SpanUser,
  BtnUser,
  Select,
  Option,
} from './AdminProfile.styled';
import { Container } from 'pages/Common.styled';
import { useStoreUser } from 'globalState/globalState';
import { Icon } from 'components/Icon/Icon';
import { useEffect, useState } from 'react';
import { deleteUsers, editRoleUsers, getUsers } from 'components/API/API';

export const AdminProfile = () => {
  const {
    userData: { id, name, email, role },
  } = useStoreUser();
  const [users, setUsers] = useState([]);
  const [click, setClick] = useState(false);
  const [isEdit, setIsEdit] = useState({ is: '', id: '', userName: '' });
  const [roleUp, setRoleUp] = useState('');

  const delUserFn = async e => {
    try {
      await deleteUsers(role, e.target.dataset.id);
      setClick(!click);
      Notify.success('Видалено');
    } catch (error) {
      Notify.failure(`${error.message}`);
      Notify.failure(`Упс... Щось пішло не так :(`);
    }
  };

  const editUserFn = async e => {
    if (!roleUp) return setIsEdit(state => ({ ...state, is: false }));

    try {
      console.log(roleUp);
      await editRoleUsers(role, isEdit.userName, roleUp);
      setIsEdit(state => ({ ...state, is: false }));
      Notify.success(`Змінено :)`);
      setClick(!click);
    } catch (error) {
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
    <Container>
      <Section>
        <Title>Профіль</Title>
        <ListInfo>
          <ItemInfo>
            <ItemText>
              <b>Id:</b> <br />
              <i>{id}</i>
            </ItemText>
          </ItemInfo>
          <ItemInfo>
            <ItemText>
              <b>Ім'я:</b> <br />
              <i>{name}</i>
            </ItemText>
            <EditBtn>
              <Icon name="icon-edit" />
            </EditBtn>
          </ItemInfo>
          <ItemInfo>
            <ItemText>
              <b>Пошта:</b> <br />
              <i>{email}</i>
            </ItemText>
            <EditBtn>
              <Icon name="icon-edit" />
            </EditBtn>
          </ItemInfo>
          <ItemInfo>
            <ItemText>
              <b>Роль:</b> <br />
              <i>{role}</i>
            </ItemText>
          </ItemInfo>
          <ItemInfo>
            <ItemText>
              <b>Пароль:</b> <br />
              <i>********</i>
            </ItemText>
            <EditBtn>
              <Icon name="icon-edit" />
            </EditBtn>
          </ItemInfo>
        </ListInfo>
      </Section>
      {role !== 'admin' ? (
        ''
      ) : (
        <Section>
          <Title>Користувачі</Title>
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
                          disabled={item.role === 'admin' ? true : false}
                          onClick={editUserFn}
                        >
                          <Icon name="icon-done" />
                          Змінити
                        </BtnUser>
                      ) : (
                        <BtnUser
                          type="button"
                          disabled={item.role === 'admin' ? true : false}
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
                        onClick={delUserFn}
                        disabled={item.role === 'admin' ? true : false}
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
        </Section>
      )}
    </Container>
  );
};
