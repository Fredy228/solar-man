import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/Сonsult/Сonsult';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/Call/Call';
import { IntroGuideRu } from '../../components/Intro/IntroGuideRu';
import { WhatGettingRu } from '../../components/WhatGetting/WhatGettingRu';
import { IntroCardsRu } from '../../components/Intro/IntroCardsRu';
import { Vitrina } from '../../components/Solution/Vitrina';

const GuideRu = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Main>
        <Frontier hiddenX={true}>
          <IntroGuideRu />
        </Frontier>

        <Container>
          <Vitrina lang={'ru'} />
        </Container>

        <Container>
          <IntroCardsRu />
        </Container>

        <Container>
          <WhatGettingRu />
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

export default GuideRu;
