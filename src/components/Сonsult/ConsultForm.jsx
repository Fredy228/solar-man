import {
  ArrowConsult,
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
import { Container } from '../../pages/Common.styled';
import { ApplicationForm } from '../SendPhone/ApplicationForm';

export const ConsultForm = ({ widthScreen }) => {
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
                Запит на консультацію {widthScreen >= 768 && <br />} або
                розрахунок
              </SectionTitle>
              <ApplicationForm
                alignItems={'start'}
                marginValue={'20px 0'}
                widthValue={'100%'}
                maxWidth={'500px'}
              />
            </WrapperText>
          </WrapperFlex>
        </Container>
      </WrapperOverHidden>
    </InnerConsult>
  );
};
