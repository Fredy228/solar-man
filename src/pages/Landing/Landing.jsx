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
import { Modal } from 'components/Modal/Modal';
import { SendPhone } from 'components/SendPhone/SendPhone';

export const Landing = () => {
  const [heightHeader, setHeightHeader] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);

  const getHeightHeader = height => {
    setHeightHeader(height);
  };

  const toggleModal = () => {
    setIsShowModal(prevS => !prevS);
    document.body.classList.toggle('no-scroll');
  };
  return (
    <>
      <LandHeader fnHeigth={getHeightHeader} />

      <Main heightHeader={heightHeader}>
        <Container>
          <Intro toggleModal={toggleModal} />
        </Container>

        <Container>
          <CalcStaion toggleModal={toggleModal} />
        </Container>

        <Frontier color={'main'}>
          <Container>
            <Solution toggleModal={toggleModal} />
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

      {isShowModal && (
        <Modal toggleModal={toggleModal}>
          <SendPhone />
        </Modal>
      )}
    </>
  );
};
