import { Icon } from 'components/Icon/Icon';
import { DescripBox, ImageBox, Inner, Text, Title, Img } from './Option.styled';
import { useShowModal } from 'globalState/globalState';

import imgIntro_webp from '../../img/ourServices/intro-2.webp';
import imgIntro_png from '../../img/ourServices/intro-2.png';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';

export const OptionHome = () => {
  const { toggleModal } = useShowModal();

  return (
    <Inner>
      <DescripBox>
        <Title>
          Сонячні електростанції
          <br /> для дому
        </Title>
        <Text>
          Сонячні електростанції для дому використовують сонячну енергію для
          виробництва електроенергії. Вони складаються з сонячних панелей,
          інвертора, зберігальної батареї та контролера заряду, і можуть бути
          розташовані на даху або на землі поруч з будинком.
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
