import { Icon } from 'components/Icon/Icon';
import {
  Button,
  DescripBox,
  ImageBox,
  Inner,
  Span,
  Text,
  Title,
  Img,
  TitleMobile,
} from './Option.styled';
import { useShowModal } from 'globalState/globalState';

import imgIntro_webp from '../../img/ourServices/intro-3.webp';
import imgIntro_png from '../../img/ourServices/intro-3.png';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';

export const OptionInvestment = () => {
  const { toggleModal } = useShowModal();

  return (
    <Inner>
      <DescripBox>
        <Title>
          Сонячні електростанції
          <br /> для інвестицій
        </Title>
        <Text>
          Сонячні електростанції, підключені до зовнішньої мережі, забезпечують
          зниження споживання та продаж надлишкової електроенергії. Вони
          економічно вигідні, забезпечують господарство енергією та можуть
          приносити прибуток.
        </Text>

        <ButtonOrg type={'button'} onClick={() => toggleModal(true)}>
          <Icon name={'icon-annotation'} /> Замовити консультацію
        </ButtonOrg>
      </DescripBox>
      <ImageBox>
        <picture>
          <source type="image/webp" srcSet={imgIntro_webp} />
          <source type="image/png" srcSet={imgIntro_png} />
          <Img src={imgIntro_png} width="500" height="500" loading="lazy" />
        </picture>
      </ImageBox>
    </Inner>
  );
};
