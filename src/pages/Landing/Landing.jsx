import { CalcStaion } from 'components/CalcStation/CalcStation';
import { LandHeader } from 'components/Header/LandHeader';
// import { Icon } from 'components/Icon/Icon';
import { Intro } from 'components/Intro/Intro';
import { Container, Frontier } from 'pages/Common.styled';
import { Header, Main } from './Landing.styled';

export const Landing = () => {
  return (
    <>
      <Header>
        <Container>
          <LandHeader />
        </Container>
      </Header>

      <Main>
        {/* Into */}
        <Frontier>
          <Intro />
        </Frontier>

        <Container>
          <CalcStaion />
        </Container>
      </Main>
    </>
  );
};
