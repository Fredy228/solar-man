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
import { useShowModal } from 'globalState/globalState';

const Home = () => {
  const { isShowModal } = useShowModal();

  return (
    <>
      <Main>
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

      <Call />

      {isShowModal && (
        <Modal>
          <SendPhone />
        </Modal>
      )}
    </>
  );
};

export default Home;
