import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Header,
  HeaderInnerAdmin,
  Logo,
  UserBox,
  Avatar,
  Name,
  Role,
  LogoutBtn,
  NameBox,
} from './Header.styled';
import { Container } from 'pages/Common.styled';
import { Icon } from 'components/Icon/Icon';
import { useStoreAuth, useStoreUser } from 'globalState/globalState';
import { logoutUser } from 'components/API/API';

import avatar_def from '../../img/avatar_def.png';
import avatar_out from '../../img/avatar_out.png';
import { useEffect } from 'react';

export const HeadAdmin = () => {
  const { isAuth, toggleValue } = useStoreAuth();
  const { userData, setUser } = useStoreUser();

  const toLogout = async () => {
    await logoutUser();
    Notify.success('Розлогінено');
    toggleValue(false);
  };

  useEffect(() => {
    const dataUser = localStorage.getItem('userData');
    if (!dataUser) return;

    setUser({ ...JSON.parse(dataUser) });
  }, [setUser]);
  return (
    <Header>
      <Container>
        <HeaderInnerAdmin>
          <Logo>
            <Icon name={'icon-logo-v2'} />
          </Logo>

          <UserBox>
            {isAuth ? (
              <>
                <LogoutBtn type="button" onClick={toLogout}>
                  Вийти
                </LogoutBtn>
                <NameBox>
                  <Name>{userData.name}</Name>
                  <Role>{userData.role}</Role>
                </NameBox>
                <Avatar
                  src={avatar_def}
                  alt="Аватар"
                  width="512px"
                  height="512px"
                />
              </>
            ) : (
              <Avatar
                src={avatar_out}
                alt="Аватар"
                width="512px"
                height="512px"
              />
            )}
          </UserBox>
        </HeaderInnerAdmin>
      </Container>
    </Header>
  );
};
