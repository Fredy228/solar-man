import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

export const PortfolioInner = styled.section`
  padding: 50px 0;

  @media screen and (max-width: 999px) {
    padding: 25px 0;
  }
`;

export const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 20px auto 0 auto;
  }
`;

export const PortfolioItem = styled.li`
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 15px auto calc(30px / 2) auto;
  }

  @media screen and (min-width: 768px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / 2 - 30px);
  }

  @media screen and (min-width: 1000px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / 3 - 30px);
  }
`;

export const PortfolioItemLink = styled(NavLink)`
  height: 100%;
  width: 100%;
  cursor: pointer;

  :hover {
    h4 {
      color: ${({ theme }) => theme.color.second};
    }
  }
`;

export const WrapperImg = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 260px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 350ms ease;

  :hover {
    transform: ${({ scaleImg }) => (scaleImg ? 'scale(1.05)' : 'initial')};
  }

  @media screen and (max-width: 1199px) {
    height: 200px;
  }

  @media screen and (max-width: 999px) {
    height: 220px;
  }

  @media screen and (max-width: 767px) {
    height: 200px;
  }
`;

export const PortfolioImg = styled.img`
  border-radius: 10px;
`;

export const TitlePortfolio = styled.h4`
  margin-top: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.g2};
  font-weight: 500;
  transition: color 350ms ease;
`;

export const SpanOverLay = styled.span`
  font-size: 14px;
  position: absolute;
  left: 15px;
  bottom: 15px;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 5px 15px;
  border-radius: 20px;
  color: ${({ theme }) => theme.color.g2};

  @media screen and (max-width: 1199px) {
    font-size: 12px;
  }
`;

export const InnerProjectOne = styled.div`
  margin-top: 100px;
`;

export const WrapperIntroProject = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const BoxIntroImg = styled.div`
  width: 420px;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 15px;

  @media screen and (max-width: 999px) {
    width: 300px;
    height: 180px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 200px;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const BoxIntroComponents = styled.div`
  flex: 1;
`;

export const IntroImg = styled.img``;
export const IntroTitle = styled.h2`
  font-size: 24px;
  line-height: 1.4;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.g2};

  @media screen and (max-width: 999px) {
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const IntroComponentsList = styled.ul`
  list-style: initial;
  margin-left: 20px;
  color: ${({ theme }) => theme.color.g2};
`;

export const IntroComponentsItem = styled.li`
  font-size: 18px;

  :first-child {
    font-weight: bold;
    list-style: none;
  }

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const WrapperGallery = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Gallery = styled(ImageGallery)``;
