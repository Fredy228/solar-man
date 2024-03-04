import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/Сonsult/Сonsult';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/Call/Call';
import { WhatGettingPrivateUk } from '../../components/WhatGetting/WhatGettingPrivateUk';
import { IntroPrivateUk } from '../../components/Intro/IntroPrivateUk';

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
