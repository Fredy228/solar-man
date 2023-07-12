import { Icon } from 'components/Icon/Icon';
import { DescripBox, ImageBox, Inner, Text, Title, Img } from './Option.styled';
import { useShowModal } from 'globalState/globalState';

import investmentIntro from '../../img/ourServices/investmant-intro.webp';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';

export const OptionInvestment = ({ widthScreen }) => {
  const { toggleModal } = useShowModal();

  return (
    <Inner minHeight={true}>
      <DescripBox>
        <Title>
          Сонячні електростанції
          <br /> для інвестицій <br />
          та прибутку
        </Title>
        <Text>
          Сонячні електростанції, підключені до зовнішньої мережі, забезпечують
          зниження споживання та продаж надлишкової електроенергії.{' '}
          {widthScreen < 768 && <br />} Вони економічно вигідні, забезпечують{' '}
          {widthScreen < 768 && <br />}
          господарство {widthScreen < 768 && <br />}енергією та{' '}
          {widthScreen < 768 && <br />}можуть {widthScreen < 768 && <br />}
          приносити {widthScreen < 768 && <br />}
          прибуток.
        </Text>

        <ButtonOrg type={'button'} onClick={() => toggleModal(true)}>
          <Icon name={'icon-annotation'} /> Замовити консультацію
        </ButtonOrg>
      </DescripBox>
      <ImageBox>
        <Img src={investmentIntro} width="718" height="718" loading="lazy" />
      </ImageBox>
    </Inner>
  );
};
