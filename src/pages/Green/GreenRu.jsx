import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/Сonsult/Сonsult';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/Call/Call';
import { CalcStaionGreenUk } from '../../components/CalcStation/CalcStationGreenUk';
import { IntroGreenRu } from '../../components/Intro/IntroGreenRu';
import { WhatGettingGreenRu } from '../../components/WhatGetting/WhatGettingGreenRu';

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
