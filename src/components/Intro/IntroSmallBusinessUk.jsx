import { IntroTitle, IntroBox2, IntroInner } from './Intro.styled';

import { Container } from '../../pages/Common.styled';

import vector_img from '../../img/intro/vector.webp';
import { Icon } from '../Icon/Icon';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';
import { useShowModal } from '../../globalState/globalState';

export const IntroSmallBusinessUk = () => {
  const { toggleModal } = useShowModal();

  return (
    <IntroBox2>
      <Container>
        <IntroInner bgImage={vector_img}>
          <IntroTitle>
            Збільшуйте прибуток, <br />
            економлячи <br /> на електроенергії
          </IntroTitle>
          <br />
          <ButtonOrg type={'button'} onClick={() => toggleModal(true)}>
            <Icon name={'icon-annotation'} /> Отримати консультацію
          </ButtonOrg>
        </IntroInner>
      </Container>
    </IntroBox2>
  );
};
