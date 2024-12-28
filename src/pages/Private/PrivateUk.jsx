import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/modals/consult/Сonsult';
import { Portfolio } from 'components/ui/home/portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';
import { WhatGettingPrivateUk } from '../../components/ui/our-services/what-getting/WhatGettingPrivateUk';
import { IntroPrivateUk } from '../../components/ui/intro/IntroPrivateUk';

const PrivateUk = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Main>
        <Frontier color={'grad'}>
          <IntroPrivateUk />
        </Frontier>

        <Container>
          <WhatGettingPrivateUk />
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

export default PrivateUk;
