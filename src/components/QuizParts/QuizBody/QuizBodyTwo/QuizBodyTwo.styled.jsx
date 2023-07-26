import styled from 'styled-components';
import { AnswerText } from '../QuizBodyOne/QuizBodyOne.styled';

export const ListAnswersTwo = styled.ul`
  display: flex;
  gap: 33px;
  padding: 30px 0;

  @media screen and (max-width: 1199px) {
    gap: 15px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;

export const InnerAnswersTwo = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: border-color 350ms ease;
  padding: 60px 22px 20px 22px;
  text-align: center;

  @media screen and (max-width: 999px) {
    padding-bottom: 20px;
    padding-top: 45px;
  }

  @media screen and (max-width: 767px) {
    padding: 15px 15px 15px 30px;
    text-align: left;
    min-height: 84px;
    display: flex;
    align-items: center;
  }
`;

export const ItemAnswersTwo = styled.li`
  position: relative;
  flex: 1;
  cursor: pointer;

  ${InnerAnswersTwo} {
    border: 2px solid
      ${({ theme, activeAnswer }) =>
        activeAnswer ? theme.color.second : theme.color.g400};
  }

  ${InnerAnswersTwo} ${AnswerText} {
    color: ${({ theme, activeAnswer }) =>
      activeAnswer ? theme.color.second : theme.color.g2};
  }

  :hover {
    border-color: ${({ theme }) => theme.color.second};

    ${AnswerText} {
      color: ${({ theme }) => theme.color.second};
    }
  }

  @media screen and (max-width: 767px) {
    padding-left: 34px;
  }
`;
