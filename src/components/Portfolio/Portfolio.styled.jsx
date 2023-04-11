import styled from 'styled-components';

export const PortfolioInner = styled.section`
  padding: 50px 0;

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

export const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;

export const PortfolioOverLay = styled.div`
  position: absolute;
  padding: 15px;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  transform: translateY(120%);
  transition: transform 350ms ease;
  color: ${({ theme }) => theme.color.white};
  /* overflow-y: auto; */
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.9) 40%
  );
`;

export const PortfolioItem = styled.li`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.color.second};
  cursor: pointer;

  &:hover ${PortfolioOverLay} {
    transform: translateY(0);
  }

  @media screen and (max-width: 767px) {
    max-width: 280px;
    margin: 0 auto calc(30px / 2) auto;
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

export const PortfolioImg = styled.img`
  width: 100%;
`;

export const TitleOverLay = styled.h4`
  position: relative;
  text-align: center;
  margin: 25px 0 35px 0;
  font-size: 16px;

  :after {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background-color: ${({ theme: { color } }) => color.second};
  }
`;

export const TextOverLay = styled.p`
  font-size: 16px;
  text-indent: 20px;
  margin-bottom: 5px;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`;
