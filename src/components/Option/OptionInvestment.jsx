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

export const OptionInvestment = () => {
  const { toggleModal } = useShowModal();

  return (
    <Inner>
      <DescripBox>
        <Title>
          <Span>Сонячні станції</Span>
          <br /> для інвестицій
        </Title>
        <Text>
          Сонячні електростанції, що працюють при наявності зовнішньої мережі,
          можуть знижувати власне споживання будинку та одночасно продавати
          надлишок електроенергії в мережу за високим зеленим тарифом. Ці типи
          сонячних електростанцій відносяться до категорії мережевих, оскільки
          не працюють без підключення до електромережі або під час тимчасового
          відключення електроенергії.
        </Text>
        <Text>
          Такі сонячні електростанції є економічно вигідними, оскільки
          забезпечують господарство енергією та можуть генерувати додатковий
          прибуток через продаж надлишку електроенергії у мережу.
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
        <br /> для інвестицій
      </TitleMobile>
    </Inner>
  );
};
