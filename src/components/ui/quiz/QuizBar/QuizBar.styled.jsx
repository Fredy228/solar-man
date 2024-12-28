import styled, { css } from 'styled-components';

export const QuizBarInner = styled.div`
  width: 100%;
  display: flex;
  padding: 0 180px;
  margin-bottom: 30px;

  @media screen and (max-width: 999px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    margin-bottom: 0;
  }
`;

export const QuizCurrentBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const QuizStepsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 100px;

  @media screen and (max-width: 999px) {
    padding-left: 20px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;
  }
`;

export const NumberQuestion = styled.span`
  font-size: 150px;
  line-height: 0.8;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.second};
  font-family: 'Poppins', sans-serif;
  margin-right: 30px;

  @media screen and (max-width: 767px) {
    line-height: 1.1;
    font-size: 120px;
  }
`;
export const QuestionName = styled.h2`
  color: ${({ theme }) => theme.color.main};
  text-transform: uppercase;
  font-size: 21px;
`;

export const TitleSpanStep = styled.p`
  margin-bottom: 6px;
  font-size: 20px;
`;

export const WrapperSpanStep = styled.div`
  display: flex;
`;

export const SpanStep = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.g1};
  border: 1px solid #cbced4;
  font-weight: 600;
  position: relative;

  :not(:last-child) {
    margin-right: 30px;
  }

  :not(:first-child):before {
    position: absolute;
    content: '';
    height: 8px;
    width: 32px;
    background-color: #cbced4;
    top: 50%;
    right: 34px;
    transform: translateY(-50%);
  }

  ${({ current }) => css`
    :not(:first-child):nth-child(-n + ${current}) {
      :before {
        background-color: ${({ theme }) => theme.color.second};
      }
    }
    :nth-child(-n + ${current}) {
      background-color: ${({ theme }) => theme.color.second};
      color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.second};
    }
  `}
`;
