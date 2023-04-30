import {
  Header,
  HeaderInnerAdmin,
  Logo,
  UserBox,
  Avatar,
  Name,
  Role,
  NameBox,
  AdminTabs,
  AdmintTab,
  LinkNav,
} from './Header.styled';
import { Container } from 'pages/Common.styled';
import { Icon } from 'components/Icon/Icon';
import { useStoreAuth, useStoreUser } from 'globalState/globalState';
import useScrollScreen from 'services/scrollScreen';

import avatar_def from '../../img/avatar_def.png';
import avatar_out from '../../img/avatar_out.png';

export const HeadAdmin = () => {
  const { isAuth } = useStoreAuth();
  const { userData } = useStoreUser();
  const scrollScreen = useScrollScreen();

  return (
    <>
      <Header scroll={scrollScreen}>
        <Container>
          <HeaderInnerAdmin>
            <Logo>
              <Icon name={'icon-logo-v2'} />
            </Logo>

            <UserBox>
              {isAuth ? (
                <>
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
      {isAuth && (
        <AdminTabs>
          <AdmintTab>
            <LinkNav to="/admin/profile">Профіль</LinkNav>
          </AdmintTab>
          <AdmintTab>
            <LinkNav to="/admin/database">Товари</LinkNav>
          </AdmintTab>
        </AdminTabs>
      )}
    </>
  );
};
