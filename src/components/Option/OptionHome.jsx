import { Icon } from 'components/Icon/Icon';
import { DescripBox, ImageBox, Inner, Text, Title, Img } from './Option.styled';
import { useShowModal } from 'globalState/globalState';

import homeIntro from '../../img/ourServices/home-intro.webp';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';

export const OptionHome = ({ widthScreen }) => {
  const { toggleModal } = useShowModal();

  return (
    <Inner minHeight={true}>
      <DescripBox>
        <Title>
          Сонячні електростанції
          <br /> для дому
        </Title>
        <Text>
          Сонячні електростанції для дому використовують сонячну енергію для
          виробництва електроенергії. Вони складаються з сонячних панелей,
          інвертора, {widthScreen < 768 && <br />}зберігальної батареї{' '}
          {widthScreen < 768 && <br />} та контролера заряду,{' '}
          {widthScreen < 768 && <br />}і можуть бути
          {widthScreen < 768 && <br />} розташовані на даху{' '}
          {widthScreen < 768 && <br />}або на землі{' '}
          {widthScreen < 768 && <br />}поруч з {widthScreen < 768 && <br />}
          будинком.
        </Text>

        <ButtonOrg type={'button'} onClick={() => toggleModal(true)}>
          <Icon name={'icon-annotation'} /> Замовити консультацію
        </ButtonOrg>
      </DescripBox>
      <ImageBox>
        <Img src={homeIntro} width="718" height="718" loading="lazy" />
      </ImageBox>
    </Inner>
  );
};
