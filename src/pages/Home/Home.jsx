import ReactPixel from 'react-facebook-pixel';
import { CalcStaion } from 'components/ui/home/calc-station/CalcStation';
import { Intro } from 'components/ui/intro/Intro';
import { Container, Frontier } from 'pages/Common.styled';
import { Main } from './Home.styled';
import { Solution } from 'components/ui/home/solution/Solution';
import { Consult } from '../../components/modals/consult/Сonsult';
import { Portfolio } from 'components/ui/home/portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { useEffect } from 'react';
import { BigBtnAds } from '../../components/ui/home/big-btn-ads/BigBtnAds';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';

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
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default Home;
