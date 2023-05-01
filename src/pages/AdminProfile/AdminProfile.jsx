import { useStoreUser } from 'globalState/globalState';
import { Profile } from './Profile/Profile';
import { UserControl } from './UserControl/UserControl';
import { Container } from 'pages/Common.styled';
import { Title, Section, Button } from './AdminProfile.styled';
import { CreateUser } from './CreateUser/CreateUser';
import { useState } from 'react';

const AdminProfile = () => {
  const {
    userData: { id, name, email, role },
  } = useStoreUser();
  const [isCreate, setIsCreate] = useState(false);

  return (
    <Container>
      <Section>
        <Title>Профіль</Title>
        <Profile id={id} name={name} email={email} role={role} />
      </Section>
      {role !== 'admin' ? (
        ''
      ) : (
        <>
          <Section>
            <Title>Створити користувача</Title>
            {isCreate ? (
              <CreateUser setIsCreate={setIsCreate} />
            ) : (
              <Button type="button" onClick={() => setIsCreate(true)}>
                Новий користувач
              </Button>
            )}
          </Section>
          <Section>
            <Title>Користувачі</Title>
            <UserControl role={role} />
          </Section>
        </>
      )}
    </Container>
  );
};

export default AdminProfile;
