import styled from 'styled-components';

export const Inner = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const Item = styled.li`
  padding-left: 65px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin: 0 auto calc(60px / 2) auto;
  }

  @media screen and (min-width: 768px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% - 30px);
  }

  @media screen and (min-width: 1000px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / 2 - 30px);
  }
`;

export const TitleBenefits = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.g2};
`;

export const WrapperSvg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 47px;
  height: 47px;
  background-color: ${({ theme }) => theme.color.second};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.color.white};
    stroke: ${({ theme }) => theme.color.white};
  }
`;

export const TextBenefits = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.g1};
`;
