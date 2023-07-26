import styled from 'styled-components';

export const ListAnswersOne = styled.ul`
  display: flex;
  gap: 30px;
  padding: 20px 0;

  @media screen and (max-width: 999px) {
    gap: 15px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const WrapperAnswerImg = styled.div`
  border: 2px solid transparent;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 350ms ease;
  margin-bottom: 12px;

  @media screen and (max-width: 767px) {
    width: 100px;
  }
`;

export const AnswerImg = styled.img`
  user-drag: none;
`;

export const AnswerText = styled.p`
  font-size: 21px;
  transition: color 350ms ease;
  line-height: 1.2;

  @media screen and (max-width: 999px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
    flex: 1;
    padding-left: 15px;
    font-size: 21px;
  }
`;

export const ItemAnswerOne = styled.li`
  position: relative;
  text-align: center;
  cursor: pointer;
  flex: 1;

  ${WrapperAnswerImg} {
    border-color: ${({ theme, activeAnswer }) =>
      activeAnswer ? theme.color.second : 'transparent'};
  }

  ${AnswerText} {
    color: ${({ theme, activeAnswer }) =>
      activeAnswer ? theme.color.second : theme.color.g2};
  }

  :hover {
    ${WrapperAnswerImg} {
      border-color: ${({ theme }) => theme.color.second};
    }

    ${AnswerText} {
      color: ${({ theme }) => theme.color.second};
    }
  }

  @media screen and (max-width: 767px) {
    display: flex;
    padding-left: 32px;
    align-items: center;
    text-align: left;
  }
`;
