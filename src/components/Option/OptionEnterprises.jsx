import { Icon } from 'components/Icon/Icon';
import { DescripBox, ImageBox, Inner, Text, Title, Img } from './Option.styled';
import { useShowModal } from 'globalState/globalState';

import imgIntro_webp from '../../img/ourServices/enterprise-intro.webp';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';

export const OptionEnterprises = ({ widthScreen }) => {
  const { toggleModal } = useShowModal();

  return (
    <Inner>
      <DescripBox>
        <Title>
          Сонячні електростанції <br /> для бізнесу <br /> та підприємств
        </Title>
        <Text>
          Завдяки використанню нашої технології, сонячна електростанція може
          зменшити ваш обсяг використання електроенергії з мережі на 30-70% на
          рік, в залежності від вашого режиму споживання. Їх можна
          {widthScreen < 768 && <br />} легко встановити на
          {widthScreen < 768 && <br />} даху будь-якої
          {widthScreen < 768 && <br />} будівлі,
          {widthScreen < 768 && <br />} виробничої
          {widthScreen < 768 && <br />} лінії або
          {widthScreen < 768 && <br />} логістичного
          {widthScreen < 768 && <br />} складу.
        </Text>
        <ButtonOrg type={'button'} onClick={() => toggleModal(true)}>
          <Icon name={'icon-annotation'} /> Замовити консультацію
        </ButtonOrg>
      </DescripBox>
      <ImageBox>
        <Img src={imgIntro_webp} width="718" height="718" loading="lazy" />
      </ImageBox>
    </Inner>
  );
};
