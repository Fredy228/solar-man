import {
  IntroBox,
  IntroTitle,
  EllipseBg,
  ImgEllipse,
  EllipseBox,
  IntroTitleSpan,
  BlockDiscount,
  DiscountSmallText,
  DiscountBigText,
} from './Intro.styled';

import { Container } from '../../../pages/Common.styled';

import vector_img from '../../../img/intro/vector.webp';

export const IntroGuideUk = () => {
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
          Надійні, сертифіковані <br /> сонячні станції. <br />{' '}
          <IntroTitleSpan>15-років гарантії</IntroTitleSpan>
        </IntroTitle>

        <BlockDiscount>
          <DiscountSmallText>
            замовляй станцію до 30.03 та отримуй
          </DiscountSmallText>
          <DiscountBigText>гарантовано 3% знижку</DiscountBigText>
        </BlockDiscount>
      </Container>
    </IntroBox>
  );
};
