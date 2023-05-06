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

import imgIntro_webp from '../../img/ourServices/intro-4.webp';
import imgIntro_png from '../../img/ourServices/intro-4.png';

export const OptionBackupPower = () => {
  const { toggleModal } = useShowModal();

  return (
    <Inner>
      <DescripBox>
        <Title>
          <Span>Системи</Span>
          <br /> резервного живлення
        </Title>
        <Text>
          Система, яка забезпечує електроживлення будинку в разі відключення
          зовнішньої мережі або тимчасової відсутності електроенергії. Такі
          системи можуть бути автономними та працювати за відсутності
          підключення до мережі електропостачання, або під час тимчасового
          відключення електроенергії.
        </Text>
        <Text>
          Важливою перевагою таких систем є те, що вони забезпечують
          стабільність живлення в будь-який момент часу, не залежно від
          зовнішніх факторів, таких як відключення електропостачання чи
          зростання тарифів.
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
        <Span>Системи</Span>
        <br /> резервного живлення
      </TitleMobile>
    </Inner>
  );
};
