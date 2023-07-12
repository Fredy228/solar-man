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

export const Consult = ({ widthScreen }) => {
  const { toggleModal } = useShowModal();

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
                Безкоштовно підберемо найкраще рішення{' '}
                {widthScreen >= 768 && <br />} саме{' '}
                {widthScreen < 768 && <br />} під ваш запит
              </SectionTitle>
              <ConsultText>
                Ми зв’яжемось з вами <br /> щоб підібрати рішення саме
                {widthScreen < 768 && <br />} для вашої мети
              </ConsultText>
              <ButtonOrg
                type={'button'}
                colorBgHover={'secondBlur'}
                onClick={() => toggleModal(true)}
              >
                <Icon name={'icon-annotation'} /> Замовити консультацію
              </ButtonOrg>
            </WrapperText>
          </WrapperFlex>
        </Container>
      </WrapperOverHidden>
    </InnerConsult>
  );
};
