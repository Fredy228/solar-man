import { useState } from 'react';

import { CalcStaion } from 'components/CalcStation/CalcStation';
import { LandHeader } from 'components/Header/LandHeader';
import { Intro } from 'components/Intro/Intro';
import { Container, Frontier } from 'pages/Common.styled';
import { Main } from './Landing.styled';
import { Solution } from 'components/Solution/Solution';
import { Team } from 'components/Team/Team';
import { Portfolio } from 'components/Portfolio/Portfolio';
import { Footer } from 'components/Footer/Footer';

export const Landing = () => {
  const [heightHeader, setHeightHeader] = useState(0);

  const getHeightHeader = height => {
    setHeightHeader(height);
  };
  return (
    <>
      <LandHeader fnHeigth={getHeightHeader} />

      <Main heightHeader={heightHeader}>
        <Container>
          <Intro />
        </Container>

        <Container>
          <CalcStaion />
        </Container>

        <Frontier color={'main'}>
          <Container>
            <Solution />
          </Container>
        </Frontier>

        <Container>
          <Team />
        </Container>

        <Frontier color={'main'}>
          <Container>
            <Portfolio />
          </Container>
        </Frontier>
      </Main>

      <Footer />
    </>
  );
};
