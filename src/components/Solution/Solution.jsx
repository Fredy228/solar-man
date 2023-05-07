import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
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
  Slide,
  Img,
  Title,
  BuyBtn,
  CustomNavigation,
  SwiperSlideS,
  BtnArrow,
} from './Solution.styled';

import {
  SectionTitle,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import { Icon } from 'components/Icon/Icon';
import useWindowWidth from '../../services/widthScreen';
import { useShowModal } from 'globalState/globalState';
import { useEffect, useState } from 'react';

const products = [
  {
    id: 1,
    imgJpg: imgJpg_1,
    imgWebp: imgWebp_1,
    alt: 'Акумуляторна система живлення',
    title: 'Акумуляторна система живлення Victron Energy Quattro 5 кВА',
    cost: '7 830',
  },
  {
    id: 2,
    imgJpg: imgJpg_5,
    imgWebp: imgWebp_5,
    alt: 'Сонячна електростанція',
    title: 'Сонячна електростанція 5 кВт',
    cost: '3 450',
  },
  {
    id: 3,
    imgJpg: imgJpg_2,
    imgWebp: imgWebp_2,
    alt: 'Акумуляторна система живлення',
    title: 'Акумуляторна система живлення Victron Energy 9 кВА',
    cost: '10 990',
  },
  {
    id: 4,
    imgJpg: imgJpg_6,
    imgWebp: imgWebp_6,
    alt: 'Сонячна електростанція',
    title: 'Сонячна електростанція 10 кВт',
    cost: '6 950',
  },
  {
    id: 5,
    imgJpg: imgJpg_3,
    imgWebp: imgWebp_3,
    alt: 'Акумуляторна система живлення',
    title: 'Акумуляторна система живлення Victron Energy Quattro 15 кВА',
    cost: '15 325',
  },
  {
    id: 6,
    imgJpg: imgJpg_7,
    imgWebp: imgWebp_7,
    alt: 'Сонячна електростанція',
    title: 'Сонячна електростанція 15 кВт',
    cost: '11 240',
  },
  {
    id: 7,
    imgJpg: imgJpg_4,
    imgWebp: imgWebp_4,
    alt: 'Акумуляторна система живлення',
    title: 'Акумуляторна система живлення Victron Energy Quattro 30 кВА',
    cost: '24 548',
  },
  {
    id: 8,
    imgJpg: imgJpg_8,
    imgWebp: imgWebp_8,
    alt: 'Сонячна електростанція',
    title: 'Сонячна електростанція 20 кВт ціна на похилу покрівлю',
    cost: '13 344',
  },
  {
    id: 9,
    imgJpg: imgJpg_9,
    imgWebp: imgWebp_9,
    alt: 'Сонячна електростанція',
    title: 'Сонячна електростанція 30 кВт',
    cost: '21 775',
  },
];

export const Solution = () => {
  const { toggleModal } = useShowModal();
  const widthScreen = useWindowWidth();
  const [slideView, setSlideView] = useState(3);

  useEffect(() => {
    if (widthScreen > 1000) {
      setSlideView(4);
    }
    if (widthScreen <= 1000 && widthScreen > 768) {
      setSlideView(3);
    }
    if (widthScreen <= 767 && widthScreen > 530) {
      setSlideView(2);
    }
    if (widthScreen <= 530) {
      setSlideView(1);
    }
  }, [widthScreen]);

  return (
    <SolutionInner id="solution" data-section>
      <SectionTitle color="#fff">
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
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map(item => {
          return (
            <SwiperSlideS key={item.id}>
              <Slide>
                <picture>
                  <source type="image/webp" srcSet={item.imgWebp} />
                  <source type="image/jpg" srcSet={item.imgJpg} />
                  <Img
                    src={imgJpg_1}
                    loading="lazy"
                    width="390"
                    height="390"
                    alt={item.alt}
                  />
                </picture>
                <Title>{item.title}</Title>
                <BuyBtn onClick={() => toggleModal(true)}>
                  <Icon name="icon-cart-buy" />
                  {item.cost}$
                </BuyBtn>
              </Slide>
            </SwiperSlideS>
          );
        })}
      </Swiper>
      <CustomNavigation>
        <div className="swiper-button-prev">
          <BtnArrow>
            <Icon name="icon-arrow" width="40" height="40" />
          </BtnArrow>
        </div>
        <div className="swiper-button-next">
          <BtnArrow>
            <Icon name="icon-arrow" width="40" height="40" />
          </BtnArrow>
        </div>
      </CustomNavigation>
    </SolutionInner>
  );
};
