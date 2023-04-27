import {
  Title,
  Section,
  ListInfo,
  ItemInfo,
  EditBtn,
  ItemText,
} from './AdminProfile.styled';
import { Container } from 'pages/Common.styled';
import { useStoreUser } from 'globalState/globalState';
import { Icon } from 'components/Icon/Icon';

export const AdminProfile = () => {
  const {
    userData: { id, name, email, role },
  } = useStoreUser();
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
    </Container>
  );
};
