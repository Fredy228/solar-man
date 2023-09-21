import styled from 'styled-components';
import { TitleQuiz } from '../../../pages/Quiz/Quiz.styled';

export const QuizStartInner = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const QuizStartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 715px;

  @media screen and (max-width: 1199px) {
    height: 564px;
  }

  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

export const QuizStartImgWrapper = styled.div`
  width: 460px;
  position: relative;

  @media screen and (max-width: 1199px) {
    width: 360px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const QuizStartImg = styled.img`
  position: absolute;
  top: 0;
  left: -250px;
  width: 710px;
  height: auto;

  @media screen and (max-width: 1199px) {
    width: 560px;
    left: -200px;
  }
`;

export const QuizStartIntroWrapper = styled.div`
  flex: 1;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  position: relative;

  @media screen and (max-width: 767px) {
    padding-left: 0;
    align-items: center;
  }
`;

export const QuizStartIntroImg = styled.img`
  position: absolute;
  left: 370px;
  top: 57%;
  transform: translateY(-50%);
  width: 478px;

  @media screen and (max-width: 1199px) and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    position: initial;
    max-width: 300px;
    margin: 0 auto 30px auto;
    width: 100%;
    top: initial;
    transform: translateY(0);
  }
`;

export const QuizStartTitleSpan = styled.span`
  color: ${({ theme }) => theme.color.second};
`;

export const QuizStartIntroTitle = styled(TitleQuiz)`
  text-align: left;

  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 28px;
  }
`;

export const QuizStartIntroText = styled.p`
  font-size: 20px;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
  }
`;
