import { Container, Frontier } from 'pages/Common.styled';
import { Main } from '../Home/Home.styled';
import { Consult } from '../../components/Сonsult/Сonsult';
import { Portfolio } from 'components/Portfolio/Portfolio';

import GoogleAnalyticsWrapper from '../../components/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper';
import useWindowWidth from '../../services/widthScreen';
import { Call } from '../../components/Call/Call';
import { IntroBigBusinessUk } from '../../components/Intro/IntroBigBusinessUk';
import { WhatGettingBigBusinessUk } from '../../components/WhatGetting/WhatGettingBigBusinessUk';
import { CalcStaionBusinessUk } from '../../components/CalcStation/CalcStationBusinessUk';

const BigBusinessUk = () => {
  const widthScreen = useWindowWidth();

  return (
    <GoogleAnalyticsWrapper>
      <Main>
        <Frontier color={'grad'}>
          <IntroBigBusinessUk />
        </Frontier>

        <Container>
          <WhatGettingBigBusinessUk />
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

export default BigBusinessUk;
