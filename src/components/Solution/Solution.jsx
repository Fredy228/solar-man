import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import imgJpg_1 from '../../img/solution/solution-1.jpg';
import imgWebp_1 from '../../img/solution/solution-1.webp';
import imgJpg_2 from '../../img/solution/solution-2.jpg';
import imgWebp_2 from '../../img/solution/solution-2.webp';
import imgJpg_3 from '../../img/solution/solution-3.jpg';
import imgWebp_3 from '../../img/solution/solution-3.webp';
import imgJpg_4 from '../../img/solution/solution-4.jpg';
import imgWebp_4 from '../../img/solution/solution-4.webp';
import imgJpg_5 from '../../img/solution/solution-5.jpg';
import imgWebp_5 from '../../img/solution/solution-5.webp';
import imgJpg_6 from '../../img/solution/solution-6.jpg';
import imgWebp_6 from '../../img/solution/solution-6.webp';
import imgJpg_7 from '../../img/solution/solution-7.jpg';
import imgWebp_7 from '../../img/solution/solution-7.webp';
import imgJpg_8 from '../../img/solution/solution-8.jpg';
import imgWebp_8 from '../../img/solution/solution-8.webp';
import imgJpg_9 from '../../img/solution/solution-9.jpg';
import imgWebp_9 from '../../img/solution/solution-9.webp';

import {
  SolutionInner,
  SectionTitle,
  TitleSpan,
  Slide,
  Img,
  Title,
  BuyBtn,
  CustomNavigation,
  SwiperSlideS,
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
    if (widthScreen <= 500) {
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
          disabledClass: 'my-disabled-class',
        }}
        slidesPerView={slideView}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlideS>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_1} />
              <source type="image/jpg" srcSet={imgJpg_1} />
              <Img src={imgJpg_1} loading="lazy" width="390" height="390" />
            </picture>
            <Title>
              Акумуляторна система живлення Victron Energy Quattro 5 кВА
            </Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlideS>
        <SwiperSlideS>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_5} />
              <source type="image/jpg" srcSet={imgJpg_5} />
              <Img src={imgJpg_5} loading="lazy" width="390" height="390" />
            </picture>
            <Title>Сонячна електростанція 5 кВт</Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlideS>
        <SwiperSlideS>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_2} />
              <source type="image/jpg" srcSet={imgJpg_2} />
              <Img src={imgJpg_2} loading="lazy" width="390" height="390" />
            </picture>
            <Title>Акумуляторна система живлення Victron Energy 9 кВА</Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlideS>
        <SwiperSlideS>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_6} />
              <source type="image/jpg" srcSet={imgJpg_6} />
              <Img src={imgJpg_6} loading="lazy" width="390" height="390" />
            </picture>
            <Title>Сонячна електростанція 10 кВт</Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlideS>
        <SwiperSlideS>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_3} />
              <source type="image/jpg" srcSet={imgJpg_3} />
              <Img src={imgJpg_3} loading="lazy" width="390" height="390" />
            </picture>
            <Title>
              Акумуляторна система живлення Victron Energy Quattro 15 кВА
            </Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlideS>
        <SwiperSlideS>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_7} />
              <source type="image/jpg" srcSet={imgJpg_7} />
              <Img src={imgJpg_7} loading="lazy" width="390" height="390" />
            </picture>
            <Title>Сонячна електростанція 15 кВт</Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlideS>
        <SwiperSlideS>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_4} />
              <source type="image/jpg" srcSet={imgJpg_4} />
              <Img src={imgJpg_4} loading="lazy" width="390" height="390" />
            </picture>
            <Title>
              Акумуляторна система живлення Victron Energy Quattro 30 кВА
            </Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlideS>
        <SwiperSlideS>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_8} />
              <source type="image/jpg" srcSet={imgJpg_8} />
              <Img src={imgJpg_8} loading="lazy" width="390" height="390" />
            </picture>
            <Title>Сонячна електростанція 20 кВт ціна на похилу покрівлю</Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlideS>
        <SwiperSlideS>
          <Slide>
            <picture>
              <source type="image/webp" srcSet={imgWebp_9} />
              <source type="image/jpg" srcSet={imgJpg_9} />
              <Img src={imgJpg_9} loading="lazy" width="390" height="390" />
            </picture>
            <Title>Сонячна електростанція 30 кВт</Title>
            <BuyBtn>11 768$</BuyBtn>
          </Slide>
        </SwiperSlideS>
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
