import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import imgJpg_1 from '../../img/solution/solution-2.jpg';
import imgWebp_1 from '../../img/solution/solution-1.webp';

import {
  SolutionInner,
  SectionTitle,
  TitleSpan,
  Slide,
  Img,
  Title,
  BuyBtn,
  CustomNavigation,
} from './Solution.styled';
import { Icon } from 'components/Icon/Icon';
import useWindowWidth from '../../services/widthScreen';
import { useEffect, useState } from 'react';

export const Solution = () => {
  const widthScreen = useWindowWidth();
  const [slideView, setSlideView] = useState(3);

  useEffect(() => {
    if (widthScreen <= 768) {
      setSlideView(2);
    }
    if (widthScreen > 768) {
      setSlideView(3);
    }
    if (widthScreen <= 430) {
      setSlideView(1);
    }
  }, [widthScreen]);

  return (
    <SolutionInner>
      <SectionTitle>
        <TitleSpan>Готові</TitleSpan> рішення
      </SectionTitle>
      <Swiper
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        slidesPerView={slideView}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_1} />
              <source type="image/jpg" srcSet={imgJpg_1} />
              <Img src={imgJpg_1} loading="lazy" />
            </picture>
            <Title>
              Акумуляторна система живлення Victron Energy Quattro 5 кВА
            </Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_1} />
              <source type="image/jpg" srcSet={imgJpg_1} />
              <Img src={imgJpg_1} loading="lazy" />
            </picture>
            <Title>
              Акумуляторна система живлення Victron Energy Quattro 5 кВА
            </Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_1} />
              <source type="image/jpg" srcSet={imgJpg_1} />
              <Img src={imgJpg_1} loading="lazy" />
            </picture>
            <Title>
              Акумуляторна система живлення Victron Energy Quattro 5 кВА
            </Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_1} />
              <source type="image/jpg" srcSet={imgJpg_1} />
              <Img src={imgJpg_1} loading="lazy" />
            </picture>
            <Title>
              Акумуляторна система живлення Victron Energy Quattro 5 кВА
            </Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_1} />
              <source type="image/jpg" srcSet={imgJpg_1} />
              <Img src={imgJpg_1} loading="lazy" />
            </picture>
            <Title>
              Акумуляторна система живлення Victron Energy Quattro 5 кВА
            </Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlide>
      </Swiper>
      <CustomNavigation>
        <div className="swiper-button-prev">
          <Icon name="icon-arrow" width="40" height="40" />
        </div>
        <div className="swiper-button-next">
          <Icon name="icon-arrow" width="40" height="40" />
        </div>
      </CustomNavigation>
    </SolutionInner>
  );
};
