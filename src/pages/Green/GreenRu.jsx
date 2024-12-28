import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/modals/consult/Сonsult';
import { Portfolio } from 'components/ui/home/portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';
import { CalcStaionGreenUk } from '../../components/ui/home/calc-station/CalcStationGreenUk';
import { IntroGreenRu } from '../../components/ui/intro/IntroGreenRu';
import { WhatGettingGreenRu } from '../../components/ui/our-services/what-getting/WhatGettingGreenRu';

const GreenRu = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Main>
        <Frontier color={'grad'}>
          <IntroGreenRu />
        </Frontier>

        <Container>
          <WhatGettingGreenRu />
        </Container>

        <Container flowOver={true}>
          <CalcStaionGreenUk widthScreen={widthScreen} />
        </Container>

        <Container>
          <Portfolio />
        </Container>

        <Frontier color={'main'}>
          <Consult widthScreen={widthScreen} />
        </Frontier>
      </Main>
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default GreenRu;
