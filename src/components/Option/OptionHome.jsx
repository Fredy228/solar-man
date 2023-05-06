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

import imgIntro_webp from '../../img/ourServices/intro-2.webp';
import imgIntro_png from '../../img/ourServices/intro-2.png';

export const OptionHome = () => {
  const { toggleModal } = useShowModal();

  return (
    <Inner>
      <DescripBox>
        <Title>
          <Span>Сонячні станції</Span>
          <br /> для дому
        </Title>
        <Text>
          Сонячні електростанції для дому - це невеликі енергетичні системи, які
          використовують сонячну енергію для виробництва електроенергії для
          будинку. Вони складаються з сонячних панелей, інвертора, зберігальної
          батареї та контролера заряду.
        </Text>
        <Text>
          Станції можуть бути розташовані на даху будинку або на землі поруч з
          ним, що дозволяє ефективно використовувати сонячну енергію для
          життєвих потреб будинку і зменшувати залежність від зовнішніх джерел
          енергії.
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
        <br /> для дому
      </TitleMobile>
    </Inner>
  );
};
