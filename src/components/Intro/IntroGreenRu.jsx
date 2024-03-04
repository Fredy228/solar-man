import { IntroTitle, IntroBox2, IntroInner } from './Intro.styled';

import { Container } from '../../pages/Common.styled';

import vector_img from '../../img/intro/vector.webp';
import { Icon } from '../Icon/Icon';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';
import { useShowModal } from '../../globalState/globalState';

export const IntroGreenRu = () => {
  const { toggleModal } = useShowModal();

  return (
    <IntroBox2>
      <Container>
        <IntroInner bgImage={vector_img}>
          <IntroTitle>
            Зарабатывайте <br />
            на продаже электроэнергии <br /> с солнечных станций
          </IntroTitle>
          <br />
          <ButtonOrg type={'button'} onClick={() => toggleModal(true)}>
            <Icon name={'icon-annotation'} /> Получить консультацию
          </ButtonOrg>
        </IntroInner>
      </Container>
    </IntroBox2>
  );
};
