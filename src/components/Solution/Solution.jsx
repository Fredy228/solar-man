import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import {
  SolutionInner,
  Slide,
  Img,
  Title,
  BuyBtn,
  CustomNavigation,
  SwiperSlideS,
  BtnArrow,
  PowerSpan,
} from './Solution.styled';
import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';

import { Icon } from 'components/Icon/Icon';
import { useBasket, useShowModal } from 'globalState/globalState';
import { useEffect, useState } from 'react';
import { baseURL, getSetsHomeOrder } from '../API/API';
import { LoadPage } from '../LoadSpiner/LoadPage';
import { numbersFormatCost } from '../../services/numbersFormatCost';

export const Solution = ({ widthScreen }) => {
  const [slideView, setSlideView] = useState(3);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toggleModal, isShowModal } = useShowModal();
  const { setGood } = useBasket();

  const clickGood = nameGood => {
    setGood(nameGood);
    toggleModal(true);
  };

  useEffect(() => {
    if (!isShowModal) {
      setGood(null);
    }
  }, [isShowModal, setGood]);

  useEffect(() => {
    try {
      async function getSetsHome() {
        setIsLoading(true);
        const { result } = await getSetsHomeOrder();
        setItems(result);
        setIsLoading(false);
      }
      getSetsHome();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (widthScreen > 1000) {
      setSlideView(4);
    }
    if (widthScreen <= 1000 && widthScreen >= 768) {
      setSlideView(3);
    }
    if (widthScreen < 768) {
      setSlideView(1);
    }
  }, [widthScreen]);

  return (
    <SolutionInner>
      <SectionTitle marginBottom={'40px'}>Готові рішення</SectionTitle>

      {isLoading ? (
        <LoadPage />
      ) : (
        <>
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
            {items.map(item => {
              return (
                <SwiperSlideS key={item.id}>
                  <Slide onClick={() => clickGood(item.title)}>
                    <Img
                      src={`${baseURL}/${item.photo}`}
                      loading="lazy"
                      width="500"
                      height="500"
                      alt={item.title}
                    />
                    <PowerSpan>{item.power}</PowerSpan>
                    <Title>{item.title}</Title>
                    <BuyBtn>
                      <Icon name="icon-cart-buy" />
                      {numbersFormatCost(item.cost)}$
                    </BuyBtn>
                  </Slide>
                </SwiperSlideS>
              );
            })}
          </Swiper>
          <CustomNavigation>
            <div className="swiper-button-prev">
              <BtnArrow type="button">
                <Icon name="icon-arrow" width="25" height="25" />
              </BtnArrow>
            </div>
            <div className="swiper-button-next">
              <BtnArrow type="button">
                <Icon name="icon-arrow" width="25" height="25" />
              </BtnArrow>
            </div>
          </CustomNavigation>
        </>
      )}
    </SolutionInner>
  );
};
