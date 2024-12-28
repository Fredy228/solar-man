import styled from 'styled-components';
import { SectionTitle } from '../../../../common-style/SectionTitle.styled';

export const InnerMission = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 900px;
  height: 180px;

  @media screen and (max-width: 999px) {
    height: 130px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;
    margin-bottom: -30px;
  }
`;

export const WrapperIcon = styled.div`
  height: 100%;
  width: 180px;
  margin-right: 40px;
  background-color: ${({ theme }) => theme.color.second};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px 0 #fc7300;

  svg {
    width: 150px;
    height: 150px;
    fill: ${({ theme }) => theme.color.white};
  }

  @media screen and (max-width: 999px) {
    width: 130px;

    svg {
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 170px;
    height: 170px;
    margin-right: 0;

    svg {
      width: 140px;
      height: 140px;
    }
  }
`;

export const WrapperText = styled.div`
  flex: 1;
`;

export const TextMission = styled(SectionTitle)`
  position: relative;
  padding-top: 20px;
  text-align: left;

  :before {
    content: 'Наша місія';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.second};
  }

  @media screen and (max-width: 767px) {
    text-align: center;
    padding-top: 30px;
    margin-top: 30px;

    :before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
