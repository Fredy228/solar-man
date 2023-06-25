import ReactPixel from 'react-facebook-pixel';
import { CalcStaion } from 'components/CalcStation/CalcStation';
import { Intro } from 'components/Intro/Intro';
import { Container, Frontier } from 'pages/Common.styled';
import { Main } from './Home.styled';
import { Solution } from 'components/Solution/Solution';
import { Consult } from '../../components/Сonsult/Сonsult';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import { useEffect } from 'react';
import { BigBtnAds } from '../../components/BigBtnAds/BigBtnAds';
import useWindowWidth from '../../services/widthScreen';

const Home = () => {
  const widthScreen = useWindowWidth();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    ReactPixel.init('727645149364780');
    ReactPixel.pageView();
  }, []);
  return (
    <GoogleAnalyticsWrapper>
      <Main>
        <Frontier hiddenX={true}>
          <Intro />
        </Frontier>

        <Container>
          <BigBtnAds />
        </Container>

        <Container flowOver={true}>
          <CalcStaion widthScreen={widthScreen} />
        </Container>

        <Container>
          <Solution widthScreen={widthScreen} />
        </Container>

        <Container>
          <Portfolio />
        </Container>

        <Frontier color={'main'}>
          <Consult widthScreen={widthScreen} />
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
