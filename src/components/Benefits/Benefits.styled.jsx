import styled from 'styled-components';

export const Inner = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  padding: 30px;
  padding-left: 135px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin: 0 auto calc(30px / 2) auto;
  }

  @media screen and (min-width: 768px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% - 30px);
  }

  @media screen and (min-width: 1000px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / 2 - 30px);
  }

  @media screen and (max-width: 1200px) {
    padding: 20px;
    padding-left: 95px;
  }

  @media screen and (max-width: 550px) {
    padding-left: 20px;
  }
`;

export const TitleBenefits = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;

  svg {
    width: 100px;
    height: 100px;
    fill: ${({ theme }) => theme.color.second};
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);

    @media screen and (max-width: 1200px) {
      width: 70px;
      height: 70px;
    }

    @media screen and (max-width: 550px) {
      width: 45px;
      height: 45px;
      position: static;
      transform: translateX(0);
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 550px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 20px;
  }
`;

export const TextBenefits = styled.p`
  font-size: 18px;
  line-height: 1.5;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;
