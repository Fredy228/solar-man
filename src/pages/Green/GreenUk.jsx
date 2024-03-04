import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/Сonsult/Сonsult';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/Call/Call';
import { IntroGreenUk } from '../../components/Intro/IntroGreenUk';
import { WhatGettingGreenUk } from '../../components/WhatGetting/WhatGettingGreenUk';
import { CalcStaionGreenUk } from '../../components/CalcStation/CalcStationGreenUk';
import { GreenBenefitUk } from '../../components/GreenBenefit/GreenBenefitUk';

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
