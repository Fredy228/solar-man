import { CalcStaion } from 'components/CalcStation/CalcStation';
import { Intro } from 'components/Intro/Intro';
import { Container, Frontier } from 'pages/Common.styled';
import { Main } from './Home.styled';
import { Solution } from 'components/Solution/Solution';
import { Team } from 'components/Team/Team';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';

const Home = () => {
  
  return (

      <GoogleAnalyticsWrapper>
      <Main>
        <Container>
          <Intro />
        </Container>

        <Container>
          <CalcStaion />
        </Container>

        <Frontier color={'main'}>
          <Container>
            <Solution />
          </Container>
        </Frontier>

        <Container>
          <Team />
        </Container>

        <Frontier color={'main'}>
          <Container>
            <Portfolio />
          </Container>
        </Frontier>
      </Main>
      </GoogleAnalyticsWrapper>

  );
};

export default Home;
