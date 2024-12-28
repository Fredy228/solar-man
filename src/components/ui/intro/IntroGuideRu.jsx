import {
  IntroBox,
  IntroTitle,
  EllipseBg,
  ImgEllipse,
  EllipseBox,
  IntroTitleSpan,
  DiscountSmallText,
  DiscountBigText,
  BlockDiscount,
} from './Intro.styled';

import { Container } from '../../../pages/Common.styled';

import vector_img from '../../../img/intro/vector.webp';

export const IntroGuideRu = () => {
  return (
    <IntroBox>
      <EllipseBg>
        <EllipseBox>
          <ImgEllipse
            src={vector_img}
            alt={'Вектор'}
            loading="lazy"
            width={'743'}
            height={'750'}
          />
        </EllipseBox>
      </EllipseBg>
      <Container style={{ paddingBottom: '5px' }}>
        <IntroTitle>
          Надежные, сертифицированные <br /> солнечные станции. <br />{' '}
          <IntroTitleSpan>15-лет гарантии</IntroTitleSpan>
        </IntroTitle>

        <BlockDiscount>
          <DiscountSmallText>
            заказывай станцию до 30.03 и получай
          </DiscountSmallText>
          <DiscountBigText>гарантированно 3% скидку</DiscountBigText>
        </BlockDiscount>
      </Container>
    </IntroBox>
  );
};
