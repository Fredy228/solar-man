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

import imgIntro_webp from '../../img/ourServices/intro-1.webp';
import imgIntro_png from '../../img/ourServices/intro-1.png';

export const OptionEnterprises = () => {
  const { toggleModal } = useShowModal();

  return (
    <Inner>
      <DescripBox>
        <Title>
          <Span>Сонячні станції</Span>
          <br /> для бізнесу та підприємств
        </Title>
        <Text>
          Ідеальний спосіб зменшити витрати на електроенергію на вашому
          підприємстві! Їх можна легко встановити на даху будь-якої будівлі,
          виробничої лінії або логістичного складу.
        </Text>
        <Text>
          Cонячна електростанція може зменшити ваш обсяг використання
          електроенергії з мережі на 30-70% на рік, в залежності від вашого
          режиму споживання.
        </Text>
        <Button type="button" onClick={() => toggleModal(true)}>
          <Icon name="icon-energy" />
          Отримати консультацію
        </Button>
      </DescripBox>
      <ImageBox>
        <picture>
          <source type="image/webp" srcSet={imgIntro_webp} />
          <source type="image/png" srcSet={imgIntro_png} />
          <Img src={imgIntro_png} width="500" height="500" loading="lazy" />
        </picture>
      </ImageBox>
      <TitleMobile>
        <Span>Сонячні станції</Span>
        <br /> для бізнесу та підприємств
      </TitleMobile>
    </Inner>
  );
};
