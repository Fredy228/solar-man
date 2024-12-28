import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/modals/consult/Сonsult';
import { Portfolio } from 'components/ui/home/portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';
import { IntroGuideRu } from '../../components/ui/intro/IntroGuideRu';
import { WhatGettingRu } from '../../components/ui/our-services/what-getting/WhatGettingRu';
import { IntroCardsRu } from '../../components/ui/intro/IntroCardsRu';
import { Vitrina } from '../../components/ui/home/solution/Vitrina';

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
