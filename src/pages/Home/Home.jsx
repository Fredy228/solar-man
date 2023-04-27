import { useState } from 'react';

import { CalcStaion } from 'components/CalcStation/CalcStation';
import { Intro } from 'components/Intro/Intro';
import { Container, Frontier } from 'pages/Common.styled';
import { Main } from './Home.styled';
import { Solution } from 'components/Solution/Solution';
import { Team } from 'components/Team/Team';
import { Portfolio } from 'components/Portfolio/Portfolio';
import { Modal } from 'components/Modal/Modal';
import { SendPhone } from 'components/SendPhone/SendPhone';
import { Call } from 'components/Call/Call';

export const Home = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prevS => !prevS);
    document.body.classList.toggle('no-scroll');
  };
  return (
    <>
      <Main>
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

      <Call toggleModal={toggleModal} />

      {isShowModal && (
        <Modal toggleModal={toggleModal}>
          <SendPhone />
        </Modal>
      )}
    </>
  );
};
