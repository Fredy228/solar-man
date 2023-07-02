import { Icon } from 'components/Icon/Icon';
import { DescripBox, ImageBox, Inner, Text, Title, Img } from './Option.styled';
import { useShowModal } from 'globalState/globalState';

import imgIntro_webp from '../../img/ourServices/intro-4.webp';
import imgIntro_png from '../../img/ourServices/intro-4.png';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';

export const OptionBackupPower = () => {
  const { toggleModal } = useShowModal();

  return (
    <Inner>
      <DescripBox>
        <Title>
          Системи резервного <br /> живлення
        </Title>
        <Text>
          Система, що забезпечує електроживлення будинку при відключенні мережі
          або відсутності електроенергії. Можуть бути автономними та працювати
          без підключення до мережі, забезпечуючи стабільне живлення незалежно
          від зовнішніх факторів.
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
