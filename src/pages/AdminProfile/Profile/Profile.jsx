import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  ListInfo,
  ItemInfo,
  EditBtn,
  ItemText,
  Span,
  Input,
  LogoutBtn,
} from './Profile.styled';
import { Icon } from 'components/Icon/Icon';
import { updatePass, updateUser, logoutUser } from 'components/API/API';
import { useStoreAuth } from 'globalState/globalState';

export const Profile = ({ id, role, email, name }) => {
  const [isEdit, setIsEdit] = useState({ is: false, name: '' });
  const [nameInp, setNameInp] = useState('');
  const [emailInp, setEmailInp] = useState('');
  const [passInp, setPassInp] = useState({ currentPass: '', newPass: '' });
  const { toggleValue } = useStoreAuth();

  const toLogout = async () => {
    await logoutUser();
    Notify.success('Розлогінено');
    toggleValue(false);
  };

  const updateUserFn = async () => {
    if (!nameInp.trim() && !emailInp.trim()) {
      setIsEdit({ is: false, name: '' });
      Notify.warning(`Ви нічого не ввели`);
      return;
    }
    try {
      const res = await updateUser(nameInp, emailInp);
      localStorage.setItem('userData', JSON.stringify(res.data.user));
      setIsEdit({ is: false, name: '' });
      window.location.reload();
      Notify.success('Змінено');
    } catch (error) {
      setIsEdit({ is: false, name: '' });
      setNameInp('');
      setEmailInp('');
      Notify.failure(`${error}`);
    }
  };

  const updatePassFn = async () => {
    if (!passInp.currentPass.trim() || !passInp.newPass.trim())
      return Notify.warning(`Введіть всі поля`);
    try {
      await updatePass(passInp.currentPass.trim(), passInp.newPass.trim());
      setIsEdit({ is: false, name: '' });
      setPassInp({ currentPass: '', newPass: '' });
      Notify.success('Змінено');
    } catch (error) {
      setIsEdit({ is: false, name: '' });
      setPassInp({ currentPass: '', newPass: '' });
      Notify.failure('Невірний поточний пароль або щось пішло не так...');
    }
  };

  return (
    <ListInfo>
      <ItemInfo>
        <ItemText>
          <b>Id:</b> <br />
          <Span>{id}</Span>
        </ItemText>
      </ItemInfo>
      <ItemInfo>
        <ItemText>
          <b>Ім'я:</b> <br />
          {isEdit.is && isEdit.name === 'name' ? (
            <Input
              value={nameInp}
              pattern="/^[a-zA-Z0-9_\-\.]{2,20}$/"
              onChange={e => setNameInp(e.target.value)}
              type="text"
            />
          ) : (
            <Span>{name}</Span>
          )}
        </ItemText>
        {isEdit.is && isEdit.name === 'name' ? (
          <>
            <EditBtn type="button" onClick={updateUserFn}>
              <Icon name="icon-done" />
              Змінити
            </EditBtn>
            <EditBtn
              type="button"
              onClick={() => setIsEdit({ is: false, name: '' })}
            >
              <Icon name="icon-cancel" />
              Відміна
            </EditBtn>
          </>
        ) : (
          <EditBtn
            type="button"
            onClick={() => setIsEdit({ is: true, name: 'name' })}
          >
            <Icon name="icon-pencil" />
            Редаг.
          </EditBtn>
        )}
      </ItemInfo>
      <ItemInfo>
        <ItemText>
          <b>Пошта:</b> <br />
          {isEdit.is && isEdit.name === 'email' ? (
            <Input
              value={emailInp}
              onChange={e => setEmailInp(e.target.value)}
              type="email"
            />
          ) : (
            <Span>{email}</Span>
          )}
        </ItemText>
        {isEdit.is && isEdit.name === 'email' ? (
          <>
            <EditBtn type="button" onClick={updateUserFn}>
              <Icon name="icon-done" />
              Змінити
            </EditBtn>
            <EditBtn
              type="button"
              onClick={() => setIsEdit({ is: false, name: '' })}
            >
              <Icon name="icon-cancel" />
              Відміна
            </EditBtn>
          </>
        ) : (
          <EditBtn
            type="button"
            onClick={() => setIsEdit({ is: true, name: 'email' })}
          >
            <Icon name="icon-pencil" />
            Редаг.
          </EditBtn>
        )}
      </ItemInfo>
      <ItemInfo>
        <ItemText>
          <b>Роль:</b> <br />
          <Span>{role}</Span>
        </ItemText>
      </ItemInfo>
      <ItemInfo>
        <ItemText>
          <b>Пароль:</b> <br />
          {isEdit.is && isEdit.name === 'pass' ? (
            <>
              <Input
                value={passInp.currentPass}
                onChange={e =>
                  setPassInp(state => ({
                    ...state,
                    currentPass: e.target.value,
                  }))
                }
                type="password"
                placeholder="Поточний пароль"
              />
              <Input
                value={passInp.newPass}
                onChange={e =>
                  setPassInp(state => ({ ...state, newPass: e.target.value }))
                }
                type="password"
                placeholder="Новий пароль"
              />
            </>
          ) : (
            <Span>**********</Span>
          )}
        </ItemText>
        {isEdit.is && isEdit.name === 'pass' ? (
          <>
            <EditBtn type="button" onClick={updatePassFn}>
              <Icon name="icon-done" />
              Змінити
            </EditBtn>
            <EditBtn
              type="button"
              onClick={() => setIsEdit({ is: false, name: '' })}
            >
              <Icon name="icon-cancel" />
              Відміна
            </EditBtn>
          </>
        ) : (
          <EditBtn
            type="button"
            onClick={() => setIsEdit({ is: true, name: 'pass' })}
          >
            <Icon name="icon-pencil" />
            Редаг.
          </EditBtn>
        )}
      </ItemInfo>
      <ItemInfo>
        <LogoutBtn type="button" onClick={toLogout}>
          Вийти з аккаунту
        </LogoutBtn>
      </ItemInfo>
    </ListInfo>
  );
};
