import styled from 'styled-components';

export const QuizBodyInner = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const CircleCheck = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${({ activeAnswer, theme }) =>
    !activeAnswer ? theme.color.g400 : theme.color.second};
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.color.white};
  }

  @media screen and (max-width: 767px) {
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
  }
`;
