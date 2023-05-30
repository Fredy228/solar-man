import ReactPixel from 'react-facebook-pixel';
import { CalcStaion } from 'components/CalcStation/CalcStation';
import { Intro } from 'components/Intro/Intro';
import { Container, Frontier } from 'pages/Common.styled';
import { Main } from './Home.styled';
import { Solution } from 'components/Solution/Solution';
import { Team } from 'components/Team/Team';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    ReactPixel.init('727645149364780');
    ReactPixel.pageView();
  }, []);
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
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=727645149364780&ev=PageView&noscript=1"
        alt={''}
      />
    </GoogleAnalyticsWrapper>
  );
};

export default Home;
