import styled from 'styled-components';

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
      fill: ${({ theme }) => theme.color.additional};
    }
  }

  & .swiper-button-prev.my-disabled-class:hover,
  & .swiper-button-next.my-disabled-class:hover {
    svg {
      fill: ${({ theme }) => theme.color.second};
    }
  }
`;

export const SolutionInner = styled.div`
  padding: 50px 0;
  position: relative;

  @media screen and (max-width: 1000px) {
    padding: 25px 0;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  position: relative;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.color.white};

  :after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: ${({ theme: { color } }) => color.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleSpan = styled.span`
  color: ${({ theme: { color } }) => color.second};
`;

export const Slide = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  height: 100%;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.color.second};
  border-radius: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 10px 0 30px 0;
  position: relative;

  :after {
    position: absolute;
    content: '';
    width: 50px;
    height: 3px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.additional};
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;

export const BuyBtn = styled.button`
  padding: 7px 25px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.white};
  border-radius: 50px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 350ms ease;

  :hover {
    background-color: ${({ theme }) => theme.color.additional};
  }
`;
