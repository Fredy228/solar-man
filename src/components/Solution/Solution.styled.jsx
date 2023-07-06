import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';

export const SwiperSlideS = styled(SwiperSlide)`
  height: auto !important;
`;

export const CustomNavigation = styled.div`
  display: flex;
  background: transparent;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 200px;
  z-index: 20;

  @media screen and (max-width: 1199px) {
    bottom: 180px;
  }

  @media screen and (max-width: 999px) {
    bottom: 160px;
  }

  svg {
    stroke: ${({ theme }) => theme.color.g2};
    transition: stroke 350ms ease;
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 350ms ease;
    background-color: rgba(80, 95, 124, 0.1);
  }

  & .swiper-button-prev.my-disabled-class,
  & .swiper-button-next.my-disabled-class {
    cursor: initial;
  }

  & .swiper-button-next {
    transform: rotate(180deg);
  }

  & .swiper-button-prev:hover,
  & .swiper-button-next:hover {
    svg {
      stroke: ${({ theme }) => theme.color.white};
      cursor: pointer;
    }

    background-color: ${({ theme }) => theme.color.main};
  }

  & .swiper-button-prev.my-disabled-class:hover,
  & .swiper-button-next.my-disabled-class:hover {
    svg {
      stroke: ${({ theme }) => theme.color.main};
    }

    background-color: rgba(80, 95, 124, 0.1);
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
  cursor: pointer;
`;

export const SolutionInner = styled.section`
  padding: 50px 0;
  position: relative;

  @media screen and (max-width: 999px) {
    padding: 25px 0;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 16px;
  padding: 0 10px;
  margin: 10px 0 15px 0;
  transition: color 350ms ease;

  @media screen and (max-width: 1199px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Slide = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  height: 100%;
  width: 100%;
  padding: 5px;
  cursor: pointer;

  :hover ${Title} {
    color: ${({ theme }) => theme.color.second};
  }
`;

export const SlideLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.g2};
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  padding: 0 25px;
`;

export const PowerSpan = styled.span`
  font-size: 14px;
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin: 15px auto 5px auto;
  background-color: ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: 1200px) and (min-width: 767px) {
    font-size: 12px;
    width: 70px;
    height: 25px;
  }
`;

export const BuyBtn = styled.span`
  padding: 7px 25px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.g2};
  margin-top: auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 7px;
    fill: ${({ theme }) => theme.color.second};
    transition: stroke 350ms ease;
  }

  @media screen and (max-width: 1199px) {
    font-size: 16px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
