import { CalcStaion } from 'components/CalcStation/CalcStation';
import { LandHeader } from 'components/Header/LandHeader';
import { Intro } from 'components/Intro/Intro';
import { Container, Frontier } from 'pages/Common.styled';
import { Header, Main } from './Landing.styled';
import { useState, useEffect } from 'react';

export const Landing = () => {
  const [heightHeader, setHeightHeader] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const getHeightHeader = height => {
    setHeightHeader(height);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Header scroll={scrollPosition}>
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
