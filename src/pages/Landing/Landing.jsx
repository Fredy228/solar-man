import { LandHeader } from 'components/Header/LandHeader';
// import { Icon } from 'components/Icon/Icon';
import { Container } from 'pages/Common.styled';
import { Header } from './Landing.styled';

export const Landing = () => {
  return (
    <Header>
      <Container>
        <LandHeader />
      </Container>
    </Header>
  );
};
