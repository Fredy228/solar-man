import styled, { css } from 'styled-components';
import { Range } from 'react-range';

import { ItemResult } from '../../../home/calc-station/CalcStation.styled';

export const CustomRange = styled(Range)``;

export const QuizSliderBox = styled.div`
  max-width: 700px;
  //height: 42px;
  padding: 30px 0;
  margin: 0 auto 0 auto;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-right: 40px;
    margin-left: 40px;
  }
`;

export const WrapperRenderTrack = styled.div`
  height: 42px;
  display: flex;
  width: 100%;
`;

export const RenderTrack = styled.div`
  height: 10px;
  width: 100%;
  border-radius: 10px;
  align-self: center;
`;

export const RenderThumb = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 25px;
  background-color: #fc7300;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  position: relative;

  svg {
    width: 20px;
    height: 20px;
    ${({ theme }) => theme.color.white}
  }
`;

export const QuizOutputSlider = styled.span`
  position: absolute;
  display: block;
  cursor: pointer;
  left: 50%;
  width: 100px;
  transform: translateX(-50%);
  padding: 5px 15px;
  font-size: 14px;
  border-radius: 20px;
  text-align: center;
  background-color: ${({ currentBrake, theme }) =>
    currentBrake ? theme.color.second : '#cbced4'};
  color: ${({ theme, currentBrake }) =>
    currentBrake ? theme.color.white : theme.color.g1};

  transition-property: color, background-color;
  transition-duration: 350ms;
  transition-timing-function: ease;
`;

export const WrapperBrakePoints = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  pointer-events: none;
`;

export const BrakePoints = styled.li`
  position: absolute;
  //cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ leftPos }) => (leftPos ? `calc(${leftPos} - 14px)` : '0')};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ theme, activeBrake }) =>
    activeBrake ? theme.color.second : theme.color.white};
  border: ${({ activeBrake }) => (activeBrake ? 'none' : '7px solid #cbced4')};
  display: flex;
  justify-content: center;
  align-items: center;
  //pointer-events: initial;

  svg {
    width: 20px;
    height: 20px;
    display: ${({ activeBrake }) => (activeBrake ? 'block' : 'none')};
    fill: ${({ theme }) => theme.color.white};
  }

  :first-child {
    ${QuizOutputSlider} {
      width: 90px;
    }
  }

  :nth-child(3) {
    ${QuizOutputSlider} {
      @media screen and (max-width: 999px) {
        left: ${({ activeBrake }) => (activeBrake ? '-33px' : '-40px')};
      }
    }
  }

  :nth-child(4) {
    ${QuizOutputSlider} {
      @media screen and (max-width: 999px) {
        left: ${({ activeBrake }) => (activeBrake ? '-33px' : '-40px')};
      }
    }
  }

  :last-child {
    ${QuizOutputSlider} {
      width: 140px;
      @media screen and (max-width: 999px) {
        left: initial;
        right: ${({ activeBrake }) => (activeBrake ? '-10px' : '-17px')};
      }
    }
  }

  ${() => css`
    ${QuizOutputSlider} {
      bottom: ${({ activeBrake }) => (activeBrake ? '-50px' : '-57px')};

      @media screen and (max-width: 999px) {
        left: ${({ activeBrake }) => (activeBrake ? '-10px' : '-17px')};
        transform: translateX(0);
      }
    }
  `}
`;

export const ResultList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 45px;
`;

export const ResultItem = styled.li`
  padding: 20px 20px;
  width: 220px;
  //background-color: ${({ theme: { color } }) => color.white};
  background-color: transparent;
  color: ${({ theme: { color } }) => color.g500};
  border: 1px solid ${({ theme }) => theme.color.main};
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;

  span {
    color: ${({ theme }) => theme.color.main};
    font-size: 25px;
    font-weight: bold;
  }

  @media screen and (max-width: 1199px) {
    width: 190px;
    padding: 15px 15px;

    span {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 767px) {
    height: 90px;
    padding: 5px 10px;
  }
`;
