import {
  IntroTitle,
  IntroTitleSpan,
  IntroBox2,
  IntroInner,
} from './Intro.styled';

import { Container } from '../../../pages/Common.styled';

import vector_img from '../../../img/intro/vector.webp';
import { Icon } from '../../reused/icon/Icon';
import { ButtonOrg } from '../../../common-style/ButtonCommon.styled';
import { useShowModal } from '../../../globalState/globalState';

export const IntroPrivateRu = () => {
  const { toggleModal } = useShowModal();

  return (
    <IntroBox2>
      <Container>
        <IntroInner bgImage={vector_img}>
          <IntroTitle>
            <IntroTitleSpan>Наша Автономная система -</IntroTitleSpan> <br />
            это гарантия независимости <br /> от централизованной сети
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
