import { CalcStaion } from 'components/CalcStation/CalcStation';
import { LandHeader } from 'components/Header/LandHeader';
// import { Icon } from 'components/Icon/Icon';
import { Intro } from 'components/Intro/Intro';
import { Container, Frontier } from 'pages/Common.styled';
import { Header, Main } from './Landing.styled';
import { useState } from 'react';

export const Landing = () => {
  const [heightHeader, setHeightHeader] = useState(0);

  const getHeightHeader = height => {
    setHeightHeader(height);
  };
  return (
    <>
      <Header>
        <Container>
          <LandHeader fnHeigth={getHeightHeader} />
        </Container>
      </Header>

      <Main heightHeader={heightHeader}>
        {/* Into */}
        <Frontier>
          <Intro />
        </Frontier>

        <Container>
          <CalcStaion />
        </Container>
      </Main>
    </>
  );
};
