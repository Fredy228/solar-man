import {
  ArrowConsult,
  ConsultText,
  ImgConsult,
  InnerConsult,
  WrapperFlex,
  WrapperImgPos,
  WrapperOverHidden,
  WrapperText,
} from './Сonsult.styled';
import { Icon } from '../Icon/Icon';
import consult_img from '../../img/consult/consult.webp';
import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';
import { useShowModal } from '../../globalState/globalState';
import { Container } from '../../pages/Common.styled';
import { useLocation } from 'react-router-dom';

export const Consult = ({ widthScreen }) => {
  const { toggleModal } = useShowModal();

  const location = useLocation();
  const currentPath = location.pathname.split('/');
  const lang = currentPath[currentPath.length - 1];

  return (
    <InnerConsult>
      <ArrowConsult>
        <Icon name={'icon-arrow-consult'} />
      </ArrowConsult>
      <WrapperOverHidden>
        <Container>
          <WrapperFlex>
            <WrapperImgPos>
              <ImgConsult
                src={consult_img}
                alt={'Встановлення панелей'}
                width={'715'}
                height={'710'}
                loading="lazy"
              />
            </WrapperImgPos>
            <WrapperText>
              <SectionTitle
                marginBottom={'30px'}
                text={widthScreen < 768 ? 'center' : 'left'}
                colorText={'white'}
              >
                {lang === 'ru' ? 'Подберем лучший' : 'Підберемо найкращий'}
                {widthScreen >= 768 && <br />}{' '}
                {lang === 'ru' ? 'вариант для вас' : 'варіант для вас'}
              </SectionTitle>
              <ButtonOrg
                type={'button'}
                colorBgHover={'secondBlur'}
                onClick={() => toggleModal(true)}
              >
                <Icon name={'icon-annotation'} />{' '}
                {lang === 'ru'
                  ? 'Заказать консультацию'
                  : 'Замовити консультацію'}
              </ButtonOrg>
            </WrapperText>
          </WrapperFlex>
        </Container>
      </WrapperOverHidden>
    </InnerConsult>
  );
};
