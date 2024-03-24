import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/Сonsult/Сonsult';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/Call/Call';
import { IntroGuideUk } from '../../components/Intro/IntroGuideUk';
import { WhatGettingUk } from '../../components/WhatGetting/WhatGettingUk';
import { IntroCardsUk } from '../../components/Intro/IntroCardsUk';
import { Vitrina } from '../../components/Solution/Vitrina';

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
