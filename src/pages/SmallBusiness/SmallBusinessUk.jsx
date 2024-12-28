import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/modals/consult/Сonsult';
import { Portfolio } from 'components/ui/home/portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';
import { IntroSmallBusinessUk } from '../../components/ui/intro/IntroSmallBusinessUk';
import { WhatGettingSmallBusinessUk } from '../../components/ui/our-services/what-getting/WhatGettingSmallBusineesUk';
import { CalcStaionBusinessUk } from '../../components/ui/home/calc-station/CalcStationBusinessUk';

const SmallBusinessUk = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Main>
        <Frontier color={'grad'}>
          <IntroSmallBusinessUk />
        </Frontier>

        <Container>
          <WhatGettingSmallBusinessUk />
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

export default SmallBusinessUk;
