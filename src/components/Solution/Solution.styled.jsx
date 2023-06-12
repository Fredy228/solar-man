import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const SwiperSlideS = styled(SwiperSlide)`
  height: auto !important;
`;

export const CustomNavigation = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  padding: 5px;
  border-radius: 50px;
  width: 105px;
  margin: 20px auto 0;

  svg {
    fill: ${({ theme }) => theme.color.second};
    transition: fill 350ms ease;
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }
  & .swiper-button-prev.my-disabled-class,
  & .swiper-button-next.my-disabled-class {
    opacity: 0.7;
    cursor: initial;
  }

  & .swiper-button-prev {
    margin-right: 15px;
  }

  & .swiper-button-next {
    transform: rotate(180deg);
  }

  & .swiper-button-prev:hover,
  & .swiper-button-next:hover {
    svg {
      fill: ${({ theme }) => theme.color.additionalV2};
    }
  }

  & .swiper-button-prev.my-disabled-class:hover,
  & .swiper-button-next.my-disabled-class:hover {
    svg {
      fill: ${({ theme }) => theme.color.second};
    }
  }
`;

export const BtnArrow = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
`;

export const SolutionInner = styled.section`
  padding: 50px 0;
  position: relative;

  @media screen and (max-width: 1000px) {
    padding: 25px 0;
  }
`;

export const Slide = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  border-radius: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  padding: 0 25px;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 16px;
  padding: 0 10px;
  margin: 10px 0 30px 0;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const BuyBtn = styled.button`
  padding: 7px 25px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.color.additional};
  color: ${({ theme }) => theme.color.white};
  border-radius: 50px;
  margin-top: auto;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  transition-property: background-color, color;
  transition-duration: 350ms;
  transition-timing-function: ease;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

  :after {
    position: absolute;
    content: '';
    width: 50px;
    height: 3px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.additional};
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
  }

  :hover {
    background-color: ${({ theme }) => theme.color.additionalV2};
    color: ${({ theme }) => theme.color.black};
  }

  :hover svg {
    stroke: ${({ theme }) => theme.color.black};
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    stroke: ${({ theme }) => theme.color.white};
    transition: stroke 350ms ease;
  }

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
