import { IntroTitle, IntroBox2, IntroInner } from './Intro.styled';

import { Container } from '../../../pages/Common.styled';

import vector_img from '../../../img/intro/vector.webp';
import { Icon } from '../../reused/icon/Icon';
import { ButtonOrg } from '../../../common-style/ButtonCommon.styled';
import { useShowModal } from '../../../globalState/globalState';

export const IntroBigBusinessUk = () => {
  const { toggleModal } = useShowModal();

  return (
    <IntroBox2>
      <Container>
        <IntroInner bgImage={vector_img}>
          <IntroTitle>
            Економія до 70% на рахунках <br />
            за електроенергію <br /> для вашого бізнесу.
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
