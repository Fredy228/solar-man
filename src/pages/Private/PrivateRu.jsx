import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/Сonsult/Сonsult';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/Call/Call';
import { IntroPrivateRu } from '../../components/Intro/IntroPrivateRu';
import { WhatGettingPrivateRu } from '../../components/WhatGetting/WhatGettingPrivateRu';

const PrivateRu = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Main>
        <Frontier color={'grad'}>
          <IntroPrivateRu />
        </Frontier>

        <Container>
          <WhatGettingPrivateRu />
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

export default PrivateRu;
