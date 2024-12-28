import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/modals/consult/Сonsult';
import { Portfolio } from 'components/ui/home/portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';
import { IntroGreenUk } from '../../components/ui/intro/IntroGreenUk';
import { WhatGettingGreenUk } from '../../components/ui/our-services/what-getting/WhatGettingGreenUk';
import { CalcStaionGreenUk } from '../../components/ui/home/calc-station/CalcStationGreenUk';
import { GreenBenefitUk } from '../../components/ui/green/green-benefit/GreenBenefitUk';

const GreenUk = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Main>
        <Frontier color={'grad'}>
          <IntroGreenUk />
        </Frontier>

        <Container>
          <WhatGettingGreenUk />
        </Container>

        <Container flowOver={true}>
          <CalcStaionGreenUk widthScreen={widthScreen} />
        </Container>

        <Container>
          <GreenBenefitUk />
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

export default GreenUk;
