import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/modals/consult/Сonsult';
import { Portfolio } from 'components/ui/home/portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/reused/call/Call';
import { IntroGuideUk } from '../../components/ui/intro/IntroGuideUk';
import { WhatGettingUk } from '../../components/ui/our-services/what-getting/WhatGettingUk';
import { IntroCardsUk } from '../../components/ui/intro/IntroCardsUk';
import { Vitrina } from '../../components/ui/home/solution/Vitrina';

const GuideUk = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Main>
        <Frontier hiddenX={true}>
          <IntroGuideUk />
        </Frontier>

        <Container>
          <Vitrina lang={'uk'} />
        </Container>

        <Container>
          <IntroCardsUk />
        </Container>

        <Container>
          <WhatGettingUk />
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

export default GuideUk;
