import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/Сonsult/Сonsult';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/Call/Call';
import { CalcStaionBusinessUk } from '../../components/CalcStation/CalcStationBusinessUk';
import { IntroSmallBusinessRu } from '../../components/Intro/IntroSmallBusinessRu';
import { WhatGettingSmallBusinessRu } from '../../components/WhatGetting/WhatGettingSmallBusineesRu';

const SmallBusinessRu = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Main>
        <Frontier color={'grad'}>
          <IntroSmallBusinessRu />
        </Frontier>

        <Container>
          <WhatGettingSmallBusinessRu />
        </Container>

        <Container flowOver={true}>
          <CalcStaionBusinessUk widthScreen={widthScreen} />
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

export default SmallBusinessRu;
